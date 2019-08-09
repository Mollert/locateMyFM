
let imgSrc = ["./image/markets/fmA.png", "./image/markets/fmB.png", "./image/markets/fmC.png", "./image/markets/fmD.png", "./image/markets/fmE.png", "./image/markets/fmF.png", "./image/markets/fmG.png", "./image/markets/fmH.png", "./image/markets/fmI.png", "./image/markets/fmJ.png", "./image/markets/fmK.png", "./image/markets/fmL.png", "./image/markets/fmM.png", "./image/markets/fmN.png", "./image/markets/fmO.png", "./image/markets/fmP.png", "./image/markets/fmQ.png", "./image/markets/fmR.png", "./image/markets/fmS.png", "./image/markets/fmT.png", "./image/markets/fmU.png", "./image/markets/fmV.png", "./image/markets/fmW.png", "./image/markets/fmX.png", "./image/markets/fmY.png", "./image/markets/fmZ.png", "./image/markets/fmAA.png", "./image/markets/fmAB.png", "./image/markets/fmAC.png", "./image/markets/fmAD.png", "./image/markets/fmAE.png", "./image/markets/fmAF.png", "./image/markets/fmAG.png", "./image/markets/fmAH.png", "./image/markets/fmAI.png", "./image/markets/fmAJ.png", "./image/markets/fmAK.png"];

const randomImgSelection = (arrayLength) => {		
	let randomArray = [];
	let elArray = [];
	let elChoices = 37;

	for ( let i = 0 ; i < arrayLength ; i++ ) {
		let subtracter = Math.floor((Math.random() * elChoices));
		elArray.push(subtracter);
		randomArray.push(imgSrc[subtracter]);
		imgSrc.splice(subtracter, 1);
		elChoices -= 1;
	}
//	return [elArray, randomArray];
	return randomArray;	
};


console.log(window.innerWidth);
console.log(document.body.clientWidth);

//let tabWidth = ((window.innerWidth) * 0.7).toFixed(2);
let displayWidth = document.body.clientWidth;

//let tabWidth = ((displayWidth) * 0.7).toFixed(2);
//document.getElementById("tablet").style.width = tabWidth;
let tabWidth = document.getElementById("tablet").clientWidth;

//tabWidth = parseFloat(tabWidth);
let tabLeftPostion = Math.ceil((displayWidth - (tabWidth + 3.2 + 3.2)) / 2);
document.getElementById("tablet").style.left = tabLeftPostion + "px";

console.log(document.getElementById("tablet").clientWidth);

let lookWidth = tabWidth - 96.0;
let lookNumChar = (document.getElementById("looking").textContent).length;
console.log(tabWidth + " " + lookWidth + " " + lookNumChar);
let lookLineLength = (lookNumChar * 18).toFixed(2);

let numLookLines = Math.ceil(lookLineLength / lookWidth);

//console.log(lookLineLength + ' = lenght of "Look Line"');
//console.log(numLookLines + " = number of lines for this page width");

let explainWidth = tabWidth - 64.0;
let explainNumChar = (document.getElementById("explain").textContent).length;
let explainLineLength = (explainNumChar * 12).toFixed(2);

let numExplainLines = Math.ceil(explainLineLength / explainWidth);
console.log(numExplainLines);


let quoteWidth = tabWidth - 32.0;
let quoteNumChar = (document.getElementById("quote").textContent).length;
let quoteLineLength = (quoteNumChar * 14).toFixed(2);

let numQuoteLines = Math.ceil(quoteLineLength / quoteWidth);
console.log(numQuoteLines);


let lookHeight = (numLookLines * 43) + 21.4 + 21.4 + 16 + 16;
console.log(lookHeight);

let explainHeight = numExplainLines * 26;
console.log(explainHeight);

let quoteHeight = (numQuoteLines * 30) + 32 + 32;
console.log(quoteHeight);

let tabHeight = lookHeight + explainHeight + quoteHeight;
console.log(tabHeight);

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

imgH = parseFloat(imgH);
let numRows = Math.ceil((tabHeight + imgH) / imgH);
let tabTopPostion = Math.ceil(imgH / 2);
document.getElementById("tablet").style.top = tabTopPostion + "px";

console.log(numRows);

let numImgs = inRow * numRows;
let theseImgs = [];
theseImgs = randomImgSelection(numImgs);
//console.log(theseImgs);

theseImgs.forEach(item => {
	let placeImg = document.createElement("img");
	placeImg.setAttribute("class", "fmImages");
	placeImg.src = item;
	placeImg.setAttribute("width", imgW);
	placeImg.setAttribute("height", imgH);			
	placeImg.alt = "FarmersMarkets";
//	console.log(placeImg);
	document.getElementById("displayCase").prepend(placeImg);
});





/*
let overall = window.innerWidth;
console.log(overall);
let subtract = document.body.clientWidth;
console.log(subtract);
let ans = (overall - subtract);
console.log(ans);
*/


/*
window.onresize = () => {
	setTimeout(() => {
		location.reload()
	}, 500);
};
*/