import os
import cv2

## to make read given tags into variable
img_tags = []
with open('assets/tags.txt','r') as f:
    data = f.read()
    for line in data.split('\n'):
        img_tags.append(line.split(','))
f.close()

## Convert those variable into dictionary with tags as key
tagPossiblity = {}
for i in range(0,len(img_tags)): ##each line
    for tags in img_tags[i]:  ##each tag in that line
        ##tagPossiblity[tags] = list of where that tag is mentioned
        try:
            tagPossiblity[tags].append(i)
        except:
            tagPossiblity[tags]= [i]


## Get dimentions of images, and make a list of all dim. for index intialization

getDimension = []
for i in range(0,len(os.listdir('gen_images'))):
    data = cv2.imread('gen_images/'+str(i)+'.jpg')
    h,w,_ = data.shape ##channel not requered therefor _
    getDimension.append([w,h])


    
## finaly add these variable to a js file
with open('assets/imageData.js','w') as f:
    f.write('let getDimension = '+str(getDimension))
    f.write('\nlet tagPossiblity = '+str(tagPossiblity))
f.close()
