import cv2
import mediapipe as mp
import time

class handDetector():
    def __init__(self, mode=False, max_hands = 2, detection_confidence = 0.5,  track_confidence = 0.5):
        self.mode = mode
        self.max_hands = max_hands
        self.detection_confidence = detection_confidence
        self.track_confidence = track_confidence
        
        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(self.mode, self.max_hands, self.detection_confidence, self.track_confidence)
        
        self.mp_draw = mp.solutions.drawing_utils
    
    def findHands(self, img, draw=True):
        img_RGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        self.results = self.hands.process(img_RGB)
    
        # DRAWING HAND LANDMARKS & CONNECTIONS
        if self.results.multi_hand_landmarks:
            print(self.results.multi_hand_landmarks)
            for hand_land_marks in self.results.multi_hand_landmarks:
                if draw:
                    self.mp_draw.draw_landmarks(img, hand_land_marks, self.mp_hands.HAND_CONNECTIONS)
        return img

    def findPosition(self, img, hand_no=0,draw=False, position_id=0):            
        land_mark_list = []
        
        if self.results.multi_hand_landmarks:
            current_hand = self.results.multi_hand_landmarks[hand_no]
            
            for id, land_mark in enumerate(current_hand.landmark):
                img_height, img_width, position = img.shape
                position_x, position_y = int(land_mark.x * img_width), int(land_mark.y * img_height)
                land_mark_list.append([position_x, position_y])
                
                if draw and id == position_id:
                    cv2.circle(img, (position_x, position_y), 15, (255, 0, 255), cv2.FILLED)
        
        return land_mark_list
# CLASS ENDS

# MAIN      
cap = cv2.VideoCapture(0)
cap.set(3, 1055)
cap.set(4, 666)

previous_time = 0
current_time = 0
detector = handDetector()

while True:
    # SETTING UP THE CVZONE
    success, img = cap.read()
    img = cv2.flip(img, 1)
    img = detector.findHands(img)
    land_mark_list_1 = detector.findPosition(img, hand_no=0)
    land_mark_list_2 = detector.findPosition(img)
    if len(land_mark_list_1) != 0:
        print(land_mark_list_1[8])
        
    if len(land_mark_list_2) != 0:
        print(land_mark_list_2[8])
        
    # SHOWING FPS
    current_time = time.time()
    fps = 1 / (current_time - previous_time)
    previous_time = current_time

    cv2.putText(img, str("FPS: " + str(int(fps))), (30, 50), cv2.FONT_HERSHEY_PLAIN, 2, (0, 255, 0), 2)
    
    # SHOWING THE IMAGE
    cv2.imshow("Image", img)
    cv2.waitKey(1)