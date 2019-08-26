<p align="center">
    <img src="/assets/fav-96.png">
</p><br>

# Plan of Attack:

```javascript
//Step 1
function tagPosiblity(var hints){
    return index_of_possiblities_from_db;
}
```
```javascript
//Step 2
function mappingToDimensions(var index_of_possiblities_from_db){
    return dimensions;
}
```
```javascript
//Step 3
function matchingDim(var dimensions){
    return option_possiblities;
}
```
```javascript
//Step 4:
function checkNumber(var option_possiblities){
    return answer_with_number;
}
```


<br>

# Attack!

1. [Download all images and create generic images](./docs/part1.md)

   - There is csv file in assets folder which contain links to multiple images.
   
   - Generic image:

     ![levi](/assets/levi.PNG)
     
2. [Extract information regarding images and Numbers](./docs/part2.md)

   - Create two dictionary one of tags in images and other of their dimension

   - Extract Number image ![zero](/assets/zero.jpg)

3. [Train Haar-Cascade](./docs/part3.md)

   - Using Generic Images and Number Create your own dataset of images and label them.

4. [Train Convolutional-Neural-Network](./docs/part4.md)

   - Now once we can identify Number from images, time to make small C.N.N. and train it on output of haar_cascade.detect(dataset)

5. [Write JavaScript Extension](./docs/part5.md) 

   - Now we have haar_cascade values and cnn model, it is time to all put together and make it work. 
