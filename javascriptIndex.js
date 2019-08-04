
let imgIds = ["fmA", "fmB", "fmC", "fmD", "fmE", "fmF", "fmG", "fmH", "fmI", "fmJ"];
let imgSrc = ["./image/markets/fmA.png", "./image/markets/fmB.png", "./image/markets/fmC.png", "./image/markets/fmD.png", "./image/markets/fmE.png", "./image/markets/fmF.png", "./image/markets/fmG.png", "./image/markets/fmH.png", "./image/markets/fmI.png", "./image/markets/fmJ.png"];

const randomizeSolutions = (defaultArray) => {		
	let randomizedArray = [];
	let originalLength = defaultArray.length;

	for ( let i = 1 ; i < originalLength ; i++ ) {
		let subtracter = Math.floor((Math.random() * defaultArray.length));
		randomizedArray.push(defaultArray[subtracter]);
		defaultArray.splice(subtracter, 1);
	}
	randomizedArray.push(defaultArray[0]);

	return randomizedArray;
};

const reorderImg = () => {
	let visibleWidth = document.body.clientWidth - 17;
	imgIds = randomizeSolutions(imgIds);	
	let inRow = 2;
	if (visibleWidth <= 800) {
		inRow = 2;
	} else if (visibleWidth > 800 && visibleWidth <= 1200) {
		inRow = 3;
		let remove1 = imgIds.pop();
		document.getElementById(remove1).style.display = "none";	
	} else {
		inRow = 4;
		let remove1 = imgIds.pop();
		document.getElementById(remove1).style.display = "none";
		let remove2 = imgIds.pop();
		document.getElementById(remove2).style.display = "none";
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

let overall = window.innerWidth;
console.log(overall);
let subtract = document.body.clientWidth;
console.log(subtract);
let ans = (overall - subtract);
console.log(ans);


reorderImg();
/*
window.onresize = () => {
	setTimeout(() => {
		location.reload()
	}, 500);
};
*/
