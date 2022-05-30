var numX = 0
var numY = 0

const sizeX = 16  // Tile size X
const sizeY = 16  // Tile size Y
const marginX = 5 // Margin measured in tiles
const marginY = 5

var cells = [];
let img;

let images;
let currentImage = 0

function setup() {
	createCanvas(windowWidth, windowHeight);
	swapImage()
	drawAll()
}

function drawAll() {
	background(255);

	const mX = marginX * sizeX
	const mY = marginY * sizeY

	const img = images[currentImage]

	let offsX // offset de l'image
	let offsY // offset de l'image

	if      (img.anchorX == 'right')  offsX = numX - img.image.width
	else if (img.anchorX == 'center') offsX = Math.floor((numX - img.image.width)/2)
	else offsX = 0 // left
	if      (img.anchorY == 'bottom') offsY = numY - img.image.height
	else if (img.anchorY == 'center') offsY = Math.floor((numY - img.image.height)/2)
	else offsY = 0 // top


	// Draw image
	noStroke()
	for (let j = 0; j<img.image.height; j++) {
		for (let i = 0; i<img.image.width; i++) {
			const x = (i + offsX) * sizeX + mX
			const y = (j + offsY) * sizeY + mY
			fill(img.image.get(i, j))
			rect(x,y,sizeX,sizeY)
		}
	}

	// Draw grid
	noFill()
	stroke(color(200))
	for (let j = 0; j<numY; j++) {
		for (let i = 0; i<numX; i++) {
			const x = i * sizeX + mX;
			const y = j * sizeY + mY;
			rect(x,y,sizeX,sizeY)
		}
	}

	// debug info
	// noStroke()
	// fill(255,0,0)
	// let str = ""
	// str += "numX : " + numX + "\n"
	// str += "numY : " + numY + "\n"
	// if (currentImage >= 0) {
	// 	str += "currentImage : " + images[currentImage].fileName + "\n"
	// 	str += "width : " + images[currentImage].image.width + "\n"
	// 	str += "height : " + images[currentImage].image.height + "\n"

	// } else {
	// 	str += "currentImage : " + currentImage
	// }
	// text(str, 20, 30)
	//console.log(str)

}

function swapImage() {

	numX = Math.max(Math.floor(windowWidth / sizeX) - marginX * 2, 1)
	numY = Math.max(Math.floor(windowHeight / sizeY) - marginY * 2, 1)

	let deltaX = 1e10
	let deltaY = 1e10
	currentImage = 0 // 1x1

 	for (let i=0; i<images.length; i++) {
 		const img = images[i]
 		if (img.image.width > numX) continue
 		if (img.image.height > numY) continue
 		let dX = numX - img.image.width
 		let dY = numY - img.image.height
 		if (dX < deltaX && dY < deltaY) {
 			currentImage = i
 			deltaX = dX
 			deltaY = dY
 		}
 	}
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
	swapImage()
	drawAll()
}

/* -------------------------------------------------------------------------- */

function preload() {

	images = [

		//DEBUG
		// {
		// 	fileName : "debug-0.png",
		// 	anchorX : "center",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-1.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-2.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-3.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-4.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-5.png",
		// 	anchorX : "center",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-6.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-7.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-8.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-9.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-10.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-11.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-12.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-13.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-14.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		// {
		// 	fileName : "debug-15.png",
		// 	anchorX : "left",
		// 	anchorY : "bottom",
		// },
		
		//actuel
		{
			fileName : "00.png",
			anchorX : "left",
			anchorY : "center",
		},

		//LEFT BOTTOM-------------------------------
		{
			fileName : "01.png",
			anchorX : "right",
			anchorY : "bottom",
		},
		{
			fileName : "02.png",
			anchorX : "right",
			anchorY : "bottom",
		},
		{
			fileName : "03.png",
			anchorX : "right",
			anchorY : "bottom",
		},
		{
			fileName : "04.png",
			anchorX : "right",
			anchorY : "bottom",
		},
		{
			fileName : "05.png",
			anchorX : "right",
			anchorY : "bottom",
		},
		{
			fileName : "06.png",
			anchorX : "right",
			anchorY : "bottom",
		},
		{
			fileName : "07.png",
			anchorX : "right",
			anchorY : "center",
		},
		{
			fileName : "08.png",
			anchorX : "right",
			anchorY : "bottom",
		},
		{
			fileName : "09.png",
			anchorX : "center",
			anchorY : "bottom",
		},
		{
			fileName : "10.png",
			anchorX : "left",
			anchorY : "bottom",
		},
		{
			fileName : "11.png",
			anchorX : "left",
			anchorY : "bottom",
		},
		{
			fileName : "12.png",
			anchorX : "left",
			anchorY : "bottom",
		},
		{
			fileName : "13.png",
			anchorX : "left",
			anchorY : "bottom",
		},
		{
			fileName : "14.png",
			anchorX : "left",
			anchorY : "bottom",
		},
		{
			fileName : "15.png",
			anchorX : "center",
			anchorY : "center",
		},
		{
			fileName : "16.png",
			anchorX : "center",
			anchorY : "center",
		},
		{
			fileName : "17.png",
			anchorX : "center",
			anchorY : "center",
		},
		{
			fileName : "18.png",
			anchorX : "center",
			anchorY : "center",
		},
		{
			fileName : "19.png",
			anchorX : "center",
			anchorY : "center",
		},
		{
			fileName : "20.png",
			anchorX : "center",
			anchorY : "center",
		},
		{
			fileName : "21.png",
			anchorX : "center",
			anchorY : "center",
		},
		{
			fileName : "b-00.png",
			anchorX : "center",
			anchorY : "center",
		},

		
		{
			fileName : "1x1.png",
			anchorX : "center",
			anchorY : "center",
			},

	].map(function(el) {
		el.image = loadImage("data/" + el.fileName)
		return el
	})
}
