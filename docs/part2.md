<p align="center">
    <img src="/assets/fav-96.png">
</p><br>

# Part 2: Understanding the Rival!

### Files: [get_img_data.py](get_img_data.py)

<br>

## Extract information regarding images

There are two information we are going to use:

### Tags:

Now all Generic Images are numbered so by looking at each image we can judge tags of it and repeating it for all the images will lead to you to a file like [this](./assets/tags.txt)

This assets/tags.txt file contain tags of all images in numerical order.

```markdown
medal,gold,one,first
medal,silver,two,second
medal,copper,third,three
turtle,turtles,four,brown shell
```

**Convert those variable into dictionary with tags as key**

```python
tagPossiblity = {}
for i in range(0,len(img_tags)): ##each line
    for tags in img_tags[i]:	##each tag in that line
        ##tagPossiblity[tags] = list of where that tag is mentioned
        try:
            tagPossiblity[tags].append(i)
        except:
            tagPossiblity[tags] = [i]
```

[<p align='right'><i> get_img_data.py</i></p>](get_img_data.py)

<br>

### Dimensions:

Dimensions can be extracted by opencv-python just open images and then images.shape will return *height, width, channels* of image

Save that into a variable

```python
getDimension = []
for i in range(0,len(os.listdir('gen_images'))): ##serial wise
    data = cv2.imread('gen_images/'+str(i)+'.jpg')
    h,w,_ = data.shape ##channel not requered therefor _
    getDimension.append([w,h])
```

[<p align='right'><i> get_img_data.py</i></p>](get_img_data.py)

<br>

**finaly add these variable to a js file**

```python
 with open('assets/imageData.js','w') as f:
    f.write('let getDimension = '+str(getDimension))
    f.write('\nlet tagPossiblity = '+str(tagPossiblity))
f.close()
```

<br>

## Numbers

Just Extract numbers in num_img folder using *magic wand* of Photoshop/GIMP or use my dataset.

**Unzip num_img.zip for my dataset**!

<br>

<br>

[Previous Part](/docs/part1.md)
[<p align='right'>Next Part</p>](/docs/part2.md)
