import cv2
import numpy
import os

try: 
    os.mkdir('neg')
except:
    print('dir already exist')
    
with open('bg.txt','w') as f:
    for image in os.listdir('gen_images'):
        img = cv2.imread('gen_images/'+image,0) ##'0' -> grayscale
        h,w = img.shape
        ## reshaping
        h = int(numpy.round((h*160/w),0)) ##rounding off to integer(no decimal place)
        w = 160
        ## saving
        cv2.imwrite('neg/'+image,cv2.resize(img,(w,h)))
        ## adding path to file
        f.write('neg/'+image+'\n')
    
