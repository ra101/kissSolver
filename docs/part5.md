<p align="center">
    <img src="/assets/fav-96.png">
</p><br>

# Part 5: Extension Assemble!

### Files: basically every .js and .json file.

<br>

## Libraries Required

- **opencv.js and utlis.js** *(for haar cascade)*
- **tf.js** *(for cnn)*

<br>

## [manifest.json](manifest.json)

C.A.P.T.C.H.A. appears where url begins with "https://kissanime.ru/Special/AreYouHuman2?reUrl="

So, first load all library and data then after page along with images are done loading, load solver.js (the file that will finally solve the C.A.P.T.C.H.A.)

```json
{
    "matches": ["*://kissanime.ru/Special/AreYouHuman2?reUrl=*"],
    "js": ["/assets/imageData.js","/js-libs/opencv.js","/js-libs/tf.js","/haar_cascade/cascade.js"],
    "run_at": "document_start"
},
{
    "matches": ["*://kissanime.ru/Special/AreYouHuman2?reUrl=*"],
    "js": ["solver.js"],
    "run_at": "document_end"
}
```

<p align='right'><i>*utlis.js will/won't be included depending on how haar cascade is integrated</i></p>

But if we got wrong answer https://kissanime.ru/Special/AreYouHuman2 will open so,

```json
{
    "matches": ["*://kissanime.ru/Special/AreYouHuman2"],
    "js": ["wrong.js"]
}
```

<p align='right'><a src='wrong.js'><u>wrong.js</u></a>: document.getElementsByTagName('a')[0].click()<br><i>Basically click the 'click me'</i></p>

<br>

## Saving C.N.N. model: from .h5 to .json

Those who have used tf.js to make and train model or Those who have used python-library 'tensorflowjs'

can skip this part, but for others like me lets convert that model.h5 to model.json

First install tensorflowjs tool:

```bash
pip install tensorflowjs
```

then go to root dir of extension and:

```bash
tensorflowjs_converter --input_format keras cnn/model.h5 cnn
```

This will save a model.json in 'cnn' directory

For more details check [this](https://www.tensorflow.org/js/tutorials/conversion/import_keras) out.

<br>

## Saving Haar Cascade Classifier: from .xml to .js

Normally Haar Cascade in js is used like this:

```javascript
//opencv.js and util.js is included (this can be node or browser)
let utils = new Utils('errorMessage');
utils.createFileFromUrl(<path>,<url>,<callBack>);
```

<p align='right'><i>here, url: https://raw.githubusercontent.com/ra101/kissSolver/master/haar_cascade/cascade.xml<br>and path can be anything like 'cascade.xml' <br>
    callBack: ()=>{}</i></p>

By Digging into util.js we get this:

```javascript
this.createFileFromUrl = function(path, url, callback) {
        let request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';
        request.onload = function(ev) {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    let data = new Uint8Array(request.response); //check this line
                    cv.FS_createDataFile('/', path, data, true, false, false);//and this
                    callback();
                } else {
                    self.printError('Failed to load ' + url + ' status: ' + request.status);
                }
            }
        };
        request.send();
    };
```

So function called is ***cv.FS_createDataFile*** and ***data*** variable is passed, if we can store this data variable then instead of calling ***Utils.createFileFromUrl*** function every time,  ***cv.FS_createDataFile*** will do our work and loading of xml from url will not required

So, with a little adjustments:

```javascript
let cascadeData; //opencv.js included       
let request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/ra101/kissSolver/master/haar_cascade/cascade.xml', true);
request.responseType = 'arraybuffer';
request.onload = function(ev) {
    if (request.readyState === 4) {
        if (request.status === 200) {
            cascadeData = new Uint8Array(request.response);
        } else {
            self.printError('Failed to load ' + url + ' status: ' + request.status);
                }
            }
        };
        request.send();
    };
```

Now all left is to save this variable, what I did was that in console i wrote ***console.log(data + '')*** and every thing was either print (can be copied) or there was option to copy(to clip board) and Hence the [haar_cascade/cascade.js](haar_cascade/cascade.js) file was written.

<br>

<br>

# [solver.js](solver.js)

This file will break the so called wall named C.A.P.T.C.H.A. and will go beyond *(well at least try to)*, It combines all the code till now. It is the Ultimate Weapon.

Enough bragging, lets get to it.

<br>**First**, hide the problem statement *(from common people)*, change title, and *cheer for Hero* (Add GIF):

```javascript
//Hiding the Problem Statement
let form = document.getElementById('formVerify1')
form.style.display='none'

document.title = "Solving C.A.P.T.C.H.A."; //Changing Title

//add .gif 
let gif = document.createElement('img');
gif.src = 'https://raw.githubusercontent.com/ra101/kissSolver/master/assets/loading.gif';
document.getElementsByClassName('barContent')[0].appendChild(gif);
```

<br>**Second**, Seize Status and extract hints:

```javascript
let status = document.getElementsByClassName('barTitle')[0];
status.innerText = 'Extracting Hints'

let hints =[];
hints.push(form.getElementsByTagName('span')[0].innerText.trim().split(', '));
hints.push(form.getElementsByTagName('span')[1].innerText.trim().split(', '));

```

<br>**Third**, Match to database using variable in imageData.js:

```js
status.innerText = 'Matching Database';

//Extreme Pseodo Code; Practically breaking devCode
for each answer{
    for hint1 in tagPossiblity{
        match it with hint2 in tagPossiblity{
            return available_options
        }
    }
}

//Extreme Pseodo Code; Practically breaking devCode
for each options in problem_statemnt{
    match option.dimentions with available_options.dimensions{
        return posiiblity if true
    }
}

```

<p align='right'><b><i>For actual code, check lines around 30 of <a src='solver.js'>solver.js</a></b></i></p>

also consider the possibility that if tag is not in tagPossiblity then,we need to reload the page, so:

```python
try{
    above code;
}
catch(e){
    location.reload();
}

```



  

<br>**Fourth**, initialize haar cascade:

```js
let haarCascade = new cv.CascadeClassifier();

```

Unlink cascade.xml if it is somewhere in memory

```js
cv.FS_unlink('cascade.xml')

```

then reload/load it:

```js
let haarCascade = new cv.CascadeClassifier();
cv.FS_createDataFile('/', 'cascade.xml',cascadeData , true, false, false);
haarCascade.load('cascade.xml');

```

<br>**Fifth**, initialize cnn model:

```js
let cnn; //first only variable

```

**Since tf.loadLayersModel is aync so it waits until runtime-stack is empty but he want it right now so, further any code written will be like: **

```js
(async()=>{
    //further any code written
})

```

then load it:

```js
cnn = await tf.loadLayersModel('https://raw.githubusercontent.com/ra101/kissSolver/master/cnn/model.json');

```

<br>

**Six**, the point where haar_cascade meets cnn:

try detecting number:

```js
let possible_number = new cv.RectVector();
let cvBatch = cv.imread(posiiblity)
let grayBatch = new cv.Mat();
cv.cvtColor(cvBatch, grayBatch, cv.COLOR_RGBA2GRAY, 0);
haarCascade.detectMultiScale(grayBatch, number);

```

```js
if number found{

```

```js
//slice the region
let roi = grayBatch.roi(number.get(0));
cv.resize(roi,roi,dsize);
//cange type of array from cv.mat to tf.tenson
var cnn_input = tf.tensor(roi.data).reshape([1,55,45,1]);
var ok = cnn.predict(cnn_input,{batchSize: 1});

//(ok.argMax(1).dataSync()[0]) returns the number with highest probablity 
if number_in_hint is not ok.argMax(1).dataSync()[0] {
   remove from possiblity array
}

```

```js
}
else{
    add to undeteced array;
}

```

<p align='right'><b><i>For actual code, check lines around 95 of <a src='solver.js'>solver.js</a></b></i></p>

CNN works quite well but I can't say they same for haar cascade so,

if there is possibility left by haar cascade and other are already rejected then, that might be answer:

```js
for(let i=0;i<2;i++){
	if(answers[i].length == 0 && undetected[i].length == 1){
		answers[i].push(undetected[i][0]);
	}
}

```

<br>

<br>

**Judgment Time:** If options are clicked or reloaded

if finally after all filters length of answer(of any question) is '1', then that must (may) be the answer lets make a reloadCounter such that

if only answer[0] is found:

reloadCounter = 1

if only answer[1] is found:

reloadCounter = 2

if answer[0] and answer[1] is found:

reloadCounter = 3

if none is found:

reloadCounter = 0

So for reloadCounter==3: window should reload:

```js
for(let i=0;i<2;i++){
	if(answers[i].length == 1){
		options[answers[i][0]].click()
		reloadCounter += i+1
	}	
}

if(reloadCounter<3){
	location.reload()
}
```

<br>

And thats is how, kissSolver came into existence...
<br>
**If you are a weeb/"otaku" and a dev too! This project needs you! Help make it better!**

<br><br> 

[Previous Part](/docs/part4.md)
