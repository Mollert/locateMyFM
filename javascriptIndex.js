
let imgIds = ["fmA", "fmB", "fmC", "fmD", "fmE", "fmF", "fmG", "fmH", "fmI", "fmJ", "fmK", "fmL", "fmM", "fmN", "fmO", "fmP"];
let imgSrc = ["./image/markets/fmA.png", "./image/markets/fmB.png", "./image/markets/fmC.png", "./image/markets/fmD.png", "./image/markets/fmE.png", "./image/markets/fmF.png", "./image/markets/fmG.png", "./image/markets/fmH.png", "./image/markets/fmI.png", "./image/markets/fmJ.png", "./image/markets/fmK.png", "./image/markets/fmL.png", "./image/markets/fmM.png", "./image/markets/fmN.png", "./image/markets/fmO.png", "./image/markets/fmP.png", "./image/markets/fmQ.png", "./image/markets/fmR.png", "./image/markets/fmS.png", "./image/markets/fmT.png", "./image/markets/fmU.png", "./image/markets/fmV.png", "./image/markets/fmW.png", "./image/markets/fmX.png", "./image/markets/fmY.png", "./image/markets/fmZ.png"];

const randomImgSelection = (arrayLength) => {		
	let randomArray = [];

	for ( let i = 0 ; i < arrayLength ; i++ ) {
		let subtracter = Math.floor((Math.random() * 26));
		randomArray.push(imgSrc[subtracter]);
		imgSrc.splice(subtracter, 1);
	}

	return randomArray;
};

const reorderImg = () => {
//	let visibleWidth = window.innerWidth;
	let visibleWidth = document.body.clientWidth;
//	let visibleWidth = document.body.clientWidth - 17;
	imgIds = randomizeSolutions(imgIds);
	let inRow = 2;
	if (visibleWidth <= 800) {
		inRow = 2;
	} else if (visibleWidth > 800 && visibleWidth <= 1200) {
		inRow = 3;
		let remove1 = imgIds.pop();
		document.getElementById(remove1).style.display = "none";
		let remove2 = imgIds.pop();
		document.getElementById(remove2).style.display = "none";
		let remove3 = imgIds.pop();
		document.getElementById(remove3).style.display = "none";
		let remove4 = imgIds.pop();
		document.getElementById(remove4).style.display = "none";	
	} else {
		inRow = 4;	
	}
	let imgW = (visibleWidth / inRow).toFixed(2);
	let imgH = (imgW * 2 / 3).toFixed(2);

	for ( i = 0 ; i < imgIds.length ; i++ ){
		document.getElementById(imgIds[i]).src = imgSrc[i];
		document.getElementById(imgIds[i]).style.width = (imgW + "px");
		document.getElementById(imgIds[i]).style.height = (imgH + "px");
	}

	let allImgH = imgH * (imgIds.length / inRow);
	let tabletH = (allImgH - (visibleWidth * .2)).toFixed(2);
	document.getElementById("tablet").style.height = (tabletH + "px");
}
/*
let overall = window.innerWidth;
console.log(overall);
let subtract = document.body.clientWidth;
console.log(subtract);
let ans = (overall - subtract);
console.log(ans);
*/

//reorderImg();
/*
window.onresize = () => {
	setTimeout(() => {
		location.reload()
	}, 500);
};
*/
//console.log(window.innerWidth);
console.log(document.body.clientWidth);

//let tabWidth = ((window.innerWidth) * 0.7).toFixed(2);
let displayWidth = document.body.clientWidth;
let tabWidth = ((displayWidth + 17.0) * 0.7).toFixed(2);
let lookWidth = tabWidth - 96.0;
//Height of "looking" text
let lookNumChar = (document.getElementById("looking").textContent).length;
console.log(tabWidth + " " + lookWidth + " " + lookNumChar);
let lookLineLength = (lookNumChar * 16.2).toFixed(2);

let numLookLines = Math.ceil(lookLineLength / lookWidth);

//console.log(lookLineLength + ' = lenght of "Look Line"');
//console.log(numLookLines + " = number of lines for this page width");

let explainWidth = tabWidth - 64.0;
let explainNumChar = (document.getElementById("explain").textContent).length;
let explainLineLength = (explainNumChar * 10.8).toFixed(2);

let numExplainLines = Math.ceil(explainLineLength / explainWidth);
console.log(numExplainLines);


let quoteWidth = tabWidth - 32.0;
let quoteNumChar = (document.getElementById("quote").textContent).length;
let quoteLineLength = (quoteNumChar * 11.2).toFixed(2);

let numQuoteLines = Math.ceil(quoteLineLength / quoteWidth);
console.log(numQuoteLines);


let lookHeight = (numLookLines * 43) + 21.4 + 21.4 + 16 + 16;
console.log(lookHeight);

let explainHeight = numExplainLines * 26;
console.log(explainHeight);

let quoteHeight = (numQuoteLines * 30) + 32 + 32;
console.log(quoteHeight);

let tabletHeight = lookHeight + explainHeight + quoteHeight;
document.getElementById("tablet").style.height = tabletHeight;
console.log(tabletHeight);

let inRow = 2;
if (displayWidth <= 700) {
	inRow = 2;
} else if (displayWidth > 700 && displayWidth <= 1000) {
	inRow = 3;
} else if (displayWidth > 1000 && displayWidth <= 1400) {
	inRow = 4;
} else {
	inRow = 5;
}

let imgW = (displayWidth / inRow).toFixed(2);
let imgH = (imgW * 2 / 3).toFixed(2);

let numRows = Math.ceil((tabletHeight + (displayWidth * .10)) / imgH);

console.log(numRows);

let numImgs = inRow * numRows;
let theseImgs = [];
theseImgs = randomImgSelection(numImgs);