import cv2
from cv2 import drawContours
import mediapipe as mp
from matplotlib.pyplot import draw
from cvzone.HandTrackingModule import HandDetector
from cvzone.PoseModule import PoseDetector
import numpy as np
import time
import math

class FACE_MESH():
    def __init__(self, mode=False, detection_confidence = 0.5,  track_confidence = 0.5, max_num_faces=1):
        self.mode = mode
        self.detection_confidence = detection_confidence
        self.track_confidence = track_confidence
        self.max_face = max_num_faces
        
        self.mp_draw = mp.solutions.drawing_utils
        
        # FACE MESH
        self.mp_face_mesh = mp.solutions.face_mesh
        self.face_mesh = self.mp_face_mesh.FaceMesh(max_num_faces=self.max_face)
        
        # DRAW SPECIFICATION
        self.draw_spec_lines = self.mp_draw.DrawingSpec(thickness=2, circle_radius=2, color=(0, 255, 0))
        self.draw_spec = self.mp_draw.DrawingSpec(thickness=1, circle_radius=3, color=(0, 255, 255))
        
    def faceMesh(self, img, draw=True):
        self.face_results = self.face_mesh.process(img_RGB)
    
        # DRAWING HAND LANDMARKS & CONNECTIONS
        if self.face_results.multi_face_landmarks:
            for face_land_marks in self.face_results.multi_face_landmarks:
                if draw:
                    self.mp_draw.draw_landmarks(img, face_land_marks, self.mp_face_mesh.FACE_CONNECTIONS, self.draw_spec, self.draw_spec_lines)
        return img

# CLASS ENDS

def findDistance(p1, p2, img=None):
    x1, y1 = p1
    x2, y2 = p2
    cx, cy = (x1 + x2) // 2, (y1 + y2) // 2
    length = math.hypot(x2 - x1, y2 - y1)
    info = (x1, y1, x2, y2, cx, cy)
    if img is not None:
        return length, info, img
    else:
        return length, info

# FUNCTIONS ENDS

cap = cv2.VideoCapture(0)
cap.set(3, 1055)
cap.set(4, 666)

previous_time = 0
current_time = 0
detector = FACE_MESH(detection_confidence=0.8)
hand_detector = HandDetector(detectionCon=0.8, maxHands=2)
pose_detector = PoseDetector(detectionCon=0.8)

while True:
    # SETTING UP THE CVZONE
    success, img = cap.read()
    img = cv2.flip(img, 1)
    img_RGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    
    # HAND DETECTION
    hands, img = hand_detector.findHands(img, flipType=False)
    
    # FACE MESH
    img = detector.faceMesh(img)
    
    #POSE DETECTION
    img = pose_detector.findPose(img)
    
    # SHOWING FPS
    current_time = time.time()
    fps = 1 / (current_time - previous_time)
    previous_time = current_time

    cv2.putText(img, str("FPS: " + str(int(fps))), (30, 50), cv2.FONT_HERSHEY_PLAIN, 2, (0, 255, 0), 2)
    
    cv2.imshow("Image", img)
    cv2.waitKey(1)