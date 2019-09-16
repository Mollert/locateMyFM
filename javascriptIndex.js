
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

const loadRows = (allRows, eachRow, images) => {
	let imgTally = 0;
	let rowTally = 0;

	for ( let r = 0 ; r < allRows ; r++ ) {
		let groupDiv = document.createElement("div");
		groupDiv.setAttribute("class", "imgDivs");
		document.getElementById("displayCase").appendChild(groupDiv);

		for ( let i = 0 ; i < eachRow ; i++ ) {		
			let placeImg = document.createElement("img");
			placeImg.setAttribute("class", "fmImages");
			placeImg.src = images[imgTally];
			placeImg.setAttribute("width", imgW);
			placeImg.setAttribute("height", imgH);			
			placeImg.alt = "FarmersMarkets";
//			console.log(placeImg);
			document.getElementsByClassName("imgDivs")[rowTally].appendChild(placeImg);
			imgTally++;
		}
		rowTally++;
	}
};


let displayWidth = document.body.clientWidth;

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

window.onload = () => {
	let displayHeight = document.getElementById("tablet").clientHeight;

	let numRows = Math.ceil((displayHeight + imgH) / (imgH + 6.2));

	let numImgs = inRow * numRows;
	let theseImgs = [];
	theseImgs = randomImgSelection(numImgs);

	loadRows(numRows, inRow, theseImgs);

	caseHeight = ((numRows * imgH) / 16) + (numRows *.4);
	
	document.getElementById("displayCase").style.height = caseHeight + "rem";

};






