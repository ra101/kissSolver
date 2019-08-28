//Hiding the Problem Statement
try{
let form = document.getElementById('formVerify1')
form.style.display='none'


//Changing Title and adding .gif 
let status = document.getElementsByClassName('barTitle')[0];
document.title = "Solving C.A.P.T.C.H.A.";
let gif = document.createElement('img');
gif.src = 'https://raw.githubusercontent.com/ra101/kissSolver/master/assets/loading.gif';
gif.style.marginTop = '5%';
document.getElementsByClassName('barContent')[0].appendChild(gif);

//Extracting Hints
status.innerText = 'Extracting Hints'

let hints =[];
hints.push(form.getElementsByTagName('span')[0].innerText.trim().split(', '));
hints.push(form.getElementsByTagName('span')[1].innerText.trim().split(', '));

status.innerText = 'Extracting Images'

let options = form.getElementsByTagName('img');

//Match to database using variable in imageData.js
status.innerText = 'Matching Database';
let answers=[[]];
answers.push([]);

try{
	for(let i=0;i<2;i++){	//i=0,1
		let possiblities = []
		for (let j=0;j<tagPossiblity[hints[i][0]].length;j++){
			for (let k=0;k<tagPossiblity[hints[i][1]].length;k++){
				if(tagPossiblity[hints[i][0]][j]==tagPossiblity[hints[i][1]][k]){
					possiblities.push(tagPossiblity[hints[i][0]][j])
					break;
				}
			}
		}
		
		for(let j=0;j<options.length;j++){	
			dim = options[j].naturalWidth+','+options[j].naturalHeight
			for(let k=0;k<possiblities.length;k++){
				if(getDimension[possiblities[k]] == dim){
				answers[i].push(j);
				break;
				}
			}
		}
	}
}
catch(e){
	;
}



if(answers[0].length ==0 || answers[0].length==0){
	location.reload()
}

//Loading Haar Cascade
status.innerText = 'Loading Number Detector'
let haarCascade = new cv.CascadeClassifier();

// there exist any link
try{
	cv.FS_unlink('cascade.xml')
} 
catch(e){
	;
}

//cascadeData is defined in /cascade/haarcascade_kiss_no.js
cv.FS_createDataFile('/', 'cascade.xml',cascadeData , true, false, false);
/*
let utils = new Utils('errorMessage');
utils.createFileFromUrl('cascade.xml', 'https://raw.githubusercontent.com/ra101/kissSolver/master/haar_cascade/cascade.xml', () => {
});
*/
haarCascade.load('cascade.xml');

let cnn;
(async () => {
cnn = await tf.loadLayersModel('https://raw.githubusercontent.com/ra101/kissSolver/master/cnn/model.json'); 

//// for Best Performance:
status.innerText = 'Solving C.A.P.T.C.H.'

let msize = new cv.Size(0, 0);
let dsize = new cv.Size(45, 55);
let number = new cv.RectVector();
let undetected =[[]];
undetected.push([]);
let count = 0
let n =options.length;
for (let i=0;i<2;i++){
	for(let j=0;j<answers[i].length;j++){
		let cvBatch = cv.imread(options[answers[i][j]])
		let grayBatch = new cv.Mat();
		cv.cvtColor(cvBatch, grayBatch, cv.COLOR_RGBA2GRAY, 0);
		haarCascade.detectMultiScale(grayBatch, number);
		if(number.size()){
			let roi = grayBatch.roi(number.get(0));
			cv.resize(roi,roi,dsize);
			var cnn_input = tf.tensor(roi.data).reshape([1,55,45,1]);
			var ok = cnn.predict(cnn_input,{batchSize: 1});
			//(ok.argMax(1).dataSync()[0]) is the no with highest probablity 
			if(hints[i][2]!=(ok.argMax(1).dataSync()[0])){
				answers[i].splice(j,1)
				j=j-1;
			}
		}
		else{
		undetected[i].push(answers[i][j]);
		answers[i].splice(j,1)
		j=j-1;
		}
	}	
}


//cascadeData.delete()
haarCascade.delete()
number.delete()

let reloadCounter = 0;

//if there are more than one option, and one option is undetected and rest are detected but wrong
for(let i=0;i<2;i++){
	if(answers[i].length == 0 && undetected[i].length == 1){
		answers[i].push(undetected[i][0]);
	}
}



for(let i=0;i<2;i++){
	if(answers[i].length == 1){
		options[answers[i][0]].click();
		reloadCounter += i+1; //0->1 and 1->2 therfore for 1&2->3
	}	
}
if(reloadCounter<3){
	location.reload()
}
})()
}
catch(e){
	;
}
















