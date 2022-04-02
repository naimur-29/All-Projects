import cv2
from cvzone.HandTrackingModule import HandDetector
import time
import numpy as np

cap = cv2.VideoCapture(0)
cap.set(3, 1055)
cap.set(4, 666)
hand_detector = HandDetector(detectionCon=0.8, maxHands=2)

previous_time = 0
current_time = 0

while True:
    # SETTING UP THE CVZONE
    success, img = cap.read()
    img = cv2.flip(img, 1)
    hands, draw = hand_detector.findHands(img, flipType=False)

    land_marks_list1 = []
    land_marks_list2 = []
            
    if hands:
        if len(hands)==2:
            hand1 = hands[0]
            hand2 = hands[1]
            land_marks_list1 = hand1["lmList"]
            land_marks_list2 = hand2["lmList"]
    
    # DRAWING A LINE BETWEEN FINGERS?
    if (land_marks_list1 and land_marks_list2):
        point1 = (land_marks_list1[8][0], land_marks_list1[8][1])
        point2 = (land_marks_list2[8][0], land_marks_list2[8][1])
        point3 = (land_marks_list1[4][0], land_marks_list1[4][1])
        point4 = (land_marks_list2[4][0], land_marks_list2[4][1])
        
        points = np.array(
            [
                list(point1),
                list(point2),
                list(point4),
                list(point3),
                list(point1),
                list(point2)
            ],
        np.int32)
        
        color = (0, 0, 255)
        fill_color = (0, 255, 0)
        thickness = 9
        isClosed = False
        
        img = cv2.polylines(img, [points], isClosed, color, thickness)
        cv2.fillPoly(img, [points], fill_color)     
        
        print([point1, point2, point3, point4])
        
    # SHOWING FPS
    current_time = time.time()
    fps = 1 / (current_time - previous_time)
    previous_time = current_time

    cv2.putText(img, str("FPS: " + str(int(fps))), (30, 50), cv2.FONT_HERSHEY_PLAIN, 2, (0, 255, 0), 2)
    
    # SHOWING THE IMAGE
    cv2.imshow("Image", img)
    cv2.waitKey(1)