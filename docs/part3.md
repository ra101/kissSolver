<p align="center">
    <img src="/assets/fav-96.png">
</p><br>

# Part 3: Say Cheese!

### Files: [neg.py](neg.py), [create_samples.py](create_samples.py)

<br>

result:

<p align="center"><img src= '/assets/pika.PNG'></p>

# Creating Dataset

For haar cascade check out [this](https://pythonprogramming.net/haar-cascade-object-detection-python-opencv-tutorial/) tutorial

learning a gray image is faster than an image with 3 channels

Well for training we require background samples which will act as negative image samples, so grayscale all gen_images and add their path to bg.txt also when you check page source of Captcha of kissanime, there exists a attribute 'width=160', so we need to resize all images hence the following:

```python
h,w = img.shape
h = int(numpy.round((h*160/w),0)) ##rounding off to integer(no decimal place)
w = 160
```

[<p align='right'><i>neg.py</i></p>](neg.py)

Now the background images are done time to add number in there foreground.

for that take a look at [this](https://pythonprogramming.net/image-arithmetics-logic-python-opencv-tutorial/) tutorial.

<br>

We take a number from 'num_imgs' folder randomly resize it with a max factor of 0.2 and randomly place somewhere onto background image (with some margin).

```python
number = cv2.imread('num_imgs/<img>')
scaling_factor = numpy.random.randint(8,11)

h,w,_ = number.shape ##channels not required
w_0 = int(numpy.round((scaling_factor*w/10),0))
h_0 = int(numpy.round((scaling_factor*h/10),0))
```

[<p align='right'><i>create_samples.py</i></p>](create_samples.py)

For the code look at [create_samples.py](create_samples.py).

<br>

## Training Model: *Command line stuff*

Now create a positive.vec

```bash
opencv_createsamples -info info.txt -num <number_of_samples_genrated> -vec positives.vec -h 55 -w 45
```

and then train it! **(make sure haar_cascade folder do exists)**

```bash
opencv_traincascade -data haar_cascade -vec positives.vec -bg bg.txt -numPos 16000 -numNeg 8000 -numStages 16 -h 55 -w 45
```

number of stages that I used was 16 (took 3.5 day on WSL), you can use more if you train it till 17 then first 16 will be loaded from xml files present in 'haar_cascade' folder

And the Haar Cascade is trained!

Now one can use .xml or convert .xml to .js (as shown in last Part) for extension

<br>

<br>

[Previous Part](/docs/part2.md)
[<p align='right'>Next Part</p>](/docs/part4.md)
