import os
import cv2
import numpy

try: 
    os.mkdir('samples')
except:
    print('dir already exist')
    
i = 0
j = 0

num_imgs = []
for num in os.listdir('num_imgs'):
    num_imgs.append(cv2.imread('num_imgs/'+num))

for j in range(0,3):
    for number in num_imgs:
        for images in os.listdir('gen_images'):
            img_hash = cv2.imread("gen_images/"+images)

            ##not all images have same shape of number
            scaling_factor = numpy.random.randint(8,11)

            h,w,_ = number.shape
            w_0 = int(numpy.round((scaling_factor*w/10),0))
            h_0 = int(numpy.round((scaling_factor*h/10),0))
            
            img_0_resize = cv2.resize(number,(w_0,h_0))

            ## resize again (you can use neg images also)
            hash_h,hash_w,_ = img_hash.shape
            hash_h = int(numpy.round((hash_h*160/hash_w),0)) ##rounding off to integer(no decimal place)
            hash_w =160
            img_hash = cv2.resize(img_hash,(hash_w,hash_h))
            
            ##choosing where to foreground number with a margin of 5
            rand_h = numpy.random.randint(5,hash_h-h_0-4)
            rand_w = numpy.random.randint(5,hash_w-w_0-4)

            ## background + foreground
            img_0_gray = cv2.cvtColor(img_0_resize,cv2.COLOR_BGR2GRAY)
            ret, mask = cv2.threshold(img_0_gray, 180, 255, cv2.THRESH_BINARY_INV)
            roi = img_hash[rand_h:rand_h+h_0,rand_w:rand_w+w_0]
            img2_fg = cv2.bitwise_and(img_0_resize,img_0_resize,mask = mask)
            img1_bg  = cv2.bitwise_and(roi,roi,mask = ~mask)
            img_hash[rand_h:rand_h+h_0,rand_w:rand_w+w_0] = cv2.add(img1_bg,img2_fg)
            line = 'samples/0_'+str(i)+".jpg"
            img_hash = cv2.cvtColor(img_hash,cv2.COLOR_BGR2GRAY)

            ## creating samples
            cv2.imwrite(line,img_hash)

            ## adding to info.txt
            line = 'samples/0_'+str(i)+".jpg 1 "+str(rand_w)+" "+str(rand_h)+" "+str(w_0)+" "+str(h_0)+"\n"
            with open('info.txt','a') as f:
                f.write(line)
            i=i+1
