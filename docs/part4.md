<p align="center">
    <img src="/assets/fav-96.png">
</p><br>

# Part 4: The Brainy Stuff!

### Files: [create_samples_no.py](create_samples_no.py), [cnn.ipynb](cnn.ipynb)

<br>

result:

<p align="center"><img src= '/assets/pika2.PNG'></p>

## Creating Dataset: *Using Haar Cascade*

Now all left is train then, number recognizing system is good to go.

To make Dataset use your haar_cascade on previous dataset *(also resize images to a standard like 45 x 55)* and **manually segregate the result**

```python
img = cv2.imread('samples/'+<fileName>,cv2.IMREAD_GRAYSCALE)
numbers = num_cascade.detectMultiScale(img)
try:
    x,y,w,h = numbers[0]
    roi = img[y:y+h,x:x+w]
    roi = cv2.resize(roi,(45,55))
    cv2.imwrite('samples_no/'+<fileName>,roi)
```

[<p align='right'><i>create_samples_no.py</i></p>](create_samples_no.py)

Use [create_samples_no.py](create_samples_no.py) for the same.

I have uploaded the number dataset for any other query.

**Unzip samples_no.zip for my dataset**!



<br>

## Training Model

For training CNN,I have made model and trained model in python (or google colab) and then converted it json for tf.js compatibility, you can also make model,train it in js/node/browser using tf.js and save it directly to json format.

CNN Model is quite simple just use 16 filters and then one pooling layer and dense it by a factor of 8 times and BOOM!!, CNN yield great results.

| Layer (type)                   | Output Shape       | Param # |
| ------------------------------ | ------------------ | :------ |
| conv2d_9 (Conv2D)              | (None, 53, 43, 16) | 160     |
| max_pooling2d_9 (MaxPooling2D) | (None, 13, 10, 16) | 0       |
| flatten_9 (Flatten)            | (None, 2080)       | 0       |
| dense_23 (Dense)               | (None, 260)        | 541060  |
| activation_19 (Activation)     | (None, 260)        | 0       |
| dropout_6 (Dropout)            | (None, 260)        | 0       |
| dense_24 (Dense)               | (None, 10)         | 2610    |
| activation_20 (Activation)     | (None, 10)         | 0       |

```python
Total params: 543,830
Trainable params: 543,830
Non-trainable params: 0
```

and finally save the model.

I have first saved the model in h5 format and then converted it to JSON. (as shown in last Part)

```python
model.save('cnn/model.h5')
```

but you can directly save it into JSON, read [this](https://www.tensorflow.org/js/tutorials/conversion/import_keras) for further insight. 

```python
import tensorflowjs as tfjs
tfjs.converters.save_keras_model(model, 'cnn')
```

 Also **Check [cnn.ipynb](cnn.ipynb) for Code.**

<br>

<br>

[Previous Part](/docs/part3.md)
[<p align='right'>Next Part</p>](/docs/part5.md)
