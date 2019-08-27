import numpy as np
import cv2
import os

try:
    os.mkdir('samples_no')
except:
    print('dir already exists')

## load_cascade
num_cascade = cv2.CascadeClassifier('haar_cascade/cascade.xml')

for image in os.listdir('samples'):
    img = cv2.imread('samples/'+image,cv2.IMREAD_GRAYSCALE)
    numbers = num_cascade.detectMultiScale(img)
    flag = False
    
    for (x,y,w,h) in numbers:
        ## iff object found then     
        flag = True
        
    if flag:
        ## roi: region of image(here, with the number part)
        roi = img[y:y+h,x:x+w] ##above x,y,w,h found at first glance
        ## saving to satandard size
        roi = cv2.resize(roi,(45,55))
        cv2.imwrite('samples_no/'+image,roi)
