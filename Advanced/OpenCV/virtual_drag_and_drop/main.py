import cv2 
import cvzone # 1.4.1
# mediapipe 0.8.7
from cv2 import drawContours
from cvzone.HandTrackingModule import HandDetector
from matplotlib.pyplot import draw
from numpy import size
import numpy as np


cap = cv2.VideoCapture(0)
cap.set(3, 1055)
cap.set(4, 666)
# detector = HandDetector(detectionCon=0.8, maxHands=1)
detector = HandDetector(detectionCon=0.8)
color_of_rect = (0, 255, 0)
# cvx, cvy, width, height = 100, 100, 100, 100


class DragableRect():
    def __init__(self, posCenter, size = (100, 100)):
        self.posCenter = posCenter
        self.size = size
    
    def update(self, cursor):
        cvx, cvy = self.posCenter
        width, height = self.size
        
        # if finger in rectangle:
        if cvx - width//2 < cursor[0] < cvx + width//2 and cvy - height//2 < cursor[1] < cvy + height//2:
            self.prePos = self.posCenter
            self.posCenter = cursor

rectList = []
for index in range(5):
    rectList.append(DragableRect([index*200 + 75, 150]))
    


while True:
    success, img = cap.read()
    img = cv2.flip(img, 1)
    detector.findHands(img)
    lmList, _ = detector.findPosition(img)
    
    if lmList:   
        length, _, _ = detector.findDistance(8, 12, img)
        spread_lenght, _, _ = detector.findDistance(4, 8, img)
        
        if length < 37:
            cursor = lmList[8]
            for rect in rectList:
                rect.update(cursor)
        
        if spread_lenght < 37:
            newY = rectList[4].posCenter[1]
            rectList = []
            for index in range(5):
                rectList.append(DragableRect([index*200 + 75, newY]))
            
            
            
    # solid rectangle:
    for rect in rectList:
        cvx, cvy = rect.posCenter
        width, height = rect.size
        
        cv2.rectangle(img, (cvx - width//2, cvy - height//2), (cvx + width//2, cvy + height//2), color_of_rect, cv2.FILLED)
        
        #fancy corner rectangle:
        # cvzone.cornerRect(img, (cvx - width//2, cvy - height//2, width, height), 10, rt = 0)
    
    # transparent rectangle:
    # imgNew = np.zeros_like(img, np.uint8)
    
    # for rect in rectList:
    #     cvx, cvy = rect.posCenter
    #     width, height = rect.size
        
    #     cv2.rectangle(imgNew, (cvx - width//2, cvy - height//2), (cvx + width//2, cvy + height//2), color_of_rect, cv2.FILLED)
        
        #fancy corner rectangle:
        # cvzone.cornerRect(imgNew, (cvx - width//2, cvy - height//2, width, height), 30, rt = 0)
    # out = img.copy()
    # alpha = 0.5
    # mask = imgNew.astype(bool)
    # out[mask] = cv2.addWeighted(img, alpha, imgNew, 1 - alpha, 0)[mask]
    
    cv2.imshow("Image", img)
    cv2.waitKey(1)