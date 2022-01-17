document.oncontextmenu = function () {
  return false;
}
let fordCircles = [];
let handleNumber, handleSize;

let horizontalCursor, verticalCursor;

//both handles
let widthHandle = 25;
let heightHandle = 8;

//horizontal handle
let horizontalx;
let horizontaly;
let overHorizontalHandle = false;
let horizontalLocked = false;
let horizontalxOffset = 0.0;
let horizontalyOffset = 0.0;

//vertical handle turned into a horizontal handle
let verticalx;
let verticaly;
let overVerticalHandle = false;
let verticalLocked = false;
let verticalxOffset = 0.0;
let verticalyOffset = 0.0;

let colourHorizontal = 0;

//mouse constraint

let leftWall
let rightWall
let xc

//colour echo
let d

let activeBubble

// sound
let A1;
let B1;
let C1;
let A2;
let B2;
let C2;
// let A3;
let B3;
let C3;
let C4;
let sampleIsLooping = false;

//


function setup() {
  noCursor();
  A1 = createAudio('assets/A1.mp3');
  A2 = createAudio('assets/A2.mp3');
  // A3 = createAudio('assets/A3.mp3');
  B1 = createAudio('assets/B1.MP3');
  B2 = createAudio('assets/B2.MP3');
  B3 = createAudio('assets/B3.MP3');
  C1 = createAudio('assets/C1.MP3');
  C2 = createAudio('assets/C2.MP3');
  C3 = createAudio('assets/C3.MP3');
  C4 = createAudio('assets/C4.MP3');


  rectMode(CENTER);
  horizontalx = widthHandle * 1.5;
  horizontaly = 75;
  verticalx = horizontalx;
  verticaly = window.innerHeight - 75;
  leftWall = widthHandle * 1.5;
  rightWall = window.innerWidth - widthHandle * 1.5;
  rectMode(RADIUS);
  createCanvas(window.innerWidth, window.innerHeight);
  generateFordCircles(3);

}

function draw() {
  xc = constrain(mouseX, leftWall, rightWall);
  background(0);

  horizontalCursor = new Handle(
    0,
    horizontaly,
    window.innerWidth,
    1,
    widthHandle,
    heightHandle
  );
  verticalCursor = new Handle(
    0,
    window.innerHeight - 75,
    window.innerWidth,
    1,
    widthHandle,
    heightHandle
  );
  verticalCursor.drawVertical(verticalx, verticaly);

  push();
  translate(width / 2, (height * 3) / 3.85);
  fordCircles.forEach((ford, index) => {
    if (index < fordCircles.length - 2) {
      //zoom (au cas où)
      let valY = map(
        verticalCursor.handlex, //VERTICAL TO HORIZONTAL
        0,
        height,
        height * 2,
        height * 10
      );
      ford.updateZoomLevel(valY); //activate the zoom level with the mouseXlevel
      //afficher les cercles
      ford.draw();
    }
  });
  pop();
  horizontalCursor.drawHorizontal(horizontalx, horizontaly);


  //horizontal
  if (
    mouseX > horizontalx - widthHandle &&
    mouseX < horizontalx + widthHandle &&
    mouseY > horizontaly - heightHandle &&
    mouseY < horizontaly + heightHandle
  ) {
    overHorizontalHandle = true;
    if (!horizontalLocked) {
      // colourHorizontal = 100;
    }
  } else {
    overHorizontalHandle = false;
  }

  //vertical
  if (
    mouseX > verticalx - widthHandle &&
    mouseX < verticalx + widthHandle &&
    mouseY > verticaly - heightHandle &&
    mouseY < verticaly + heightHandle
  ) {
    overVerticalHandle = true;
    if (!verticalLocked) {}
  } else {
    overVerticalHandle = false;
  }

  ellipse(mouseX, mouseY, 20)
}

/**
 *
 * fonction pour générer X cercles selon l'equation x = x/y
 */

function generateFordCircles(n) {
  let x1 = 0;
  let y1 = 1;
  let x2 = 1;
  let y2 = n;

  let x;
  let y = 0;
  let index = 0;
  while (y != 1) {
    x = Math.floor((y1 + n) / y2) * x2 - x1;
    y = Math.floor((y1 + n) / y2) * y2 - y1;

    fordCircles.push(new FordCircle(x / y, y, 1 / Math.pow(y, 2) / 2, index));

    x1 = x2;
    x2 = x;
    y1 = y2;
    y2 = y;
    index++;
  }
  // console.log(this.r, index);
}


function mouseClicked(e) {

  fordCircles.forEach((ford, index) => {
    // console.log(ford);
    //translate(width / 2, (height * 3) / 4);
    let d = dist(
      e.x,
      e.y,
      ford.realX + width / 2,
      ford.realY + (height * 3) / 4
    );


    if (d < ford.realR) {
      console.log("clicked on circle");
      let n = Tone.now(); //delay
      ford.rEcho = 0;
      // ford.brightness = 255;
      // fill(255,0,0)
      ford.echoIsActivated = true;




      if (ford.realR > 250) { //biggest

        C1.play();
      }


      if (ford.realR > 100 && ford.realR < 250) { //biggest
        // Tone.loaded().then(() => {
        //   sampler.triggerAttackRelease(["E#2"], 4);
        //   sampler.triggerAttackRelease(["E#2"], 4,n+2); ///TATATATA
        // })
        if (!sampleIsLooping) {
          A2.loop();
          A2.speed(2)
          sampleIsLooping = true;
        } else {
          A1.stop();
          sampleIsLooping = false;
        }

        ford.brightness = 255;
      }

      if (ford.realR > 100 && ford.realR < 250 && activeBubble == true) { //biggest
        ford.brightness = 0;
      }


      if (ford.realR > 60 && ford.realR < 100) {
        if (!sampleIsLooping) {
          C4.loop();
          C4.speed(2)
          sampleIsLooping = true;
        } else {
          C4.stop();
          sampleIsLooping = false;
        }

        ford.brightness = 255;
      }

      if (ford.realR > 60 && ford.realR < 100 && activeBubble == true) { //biggest
        ford.brightness = 0;
      }



      if (ford.realR > 40 && ford.realR < 60) {
        if (!sampleIsLooping) {
          B2.loop();
          B2.speed(2)
          sampleIsLooping = true;
        } else {
          B2.stop();
          sampleIsLooping = false;
        }

        ford.brightness = 255;
      }

      if (ford.realR > 40 && ford.realR < 60 && activeBubble == true) { //biggest
        ford.brightness = 0;
      }


      if (ford.realR > 20 && ford.realR < 40) {
        ford.brightness = 255;

        if (!sampleIsLooping) {

          B3.loop();
          B3.speed(2)


          sampleIsLooping = true;
        } else {
          B3.stop();
          sampleIsLooping = false;
        }
      }

      if (ford.realR > 20 && ford.realR < 40 && activeBubble == true) { //biggest
        ford.brightness = 0;
      }

      if (ford.realR > 10 && ford.realR < 20) {
        if (!sampleIsLooping) {
          C2.loop();
          C2.speed(2)
          sampleIsLooping = true;
        } else {
          C2.stop();
          sampleIsLooping = false;
        }

        ford.brightness = 255;
      }

      if(ford.realR > 10 && ford.realR < 20 && activeBubble == true) {
        ford.brightness = 0;
      }
      // if (ford.realR > 1) {
      //   Tone.loaded().then(() => {
      //     sampler.triggerAttackRelease(["A1"], 4);
      //   })
      // }


      if (ford.brightness == 255) {
        activeBubble = true

      } else {
        activeBubble = false
        Tone.Transport.stop();
      }

      if (activeBubble == false) {
        ford.brightness = 0;
      }
    }





  });

}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    fordCircles[index].clicked(xc, mouseY);
  }
  horizontalCursor.clicked();
  verticalCursor.clicked();


}


function mousePressed() {
  fordCircle.click()
}

function mousePressed() {
  if (overHorizontalHandle) {
    horizontalLocked = true;
    fill(255, 255, 255);
  } else {
    horizontalLocked = false;
  }
  horizontalxOffset = xc - horizontalx;
  //  verticalyOffset = mouseY - horizontaly;

  if (overVerticalHandle) {
    verticalLocked = true;
    fill(255, 255, 255);
  } else {
    verticalLocked = false;
  }
  verticalyOffset = xc - verticaly;

}

function mouseDragged() {
  if (horizontalLocked) {
    horizontalx = xc - horizontalxOffset;
    // horizontaly = mouseY - yOffset;

    // changer les ford

    let val = floor(map(horizontalx, 0, width, 2, 32));
    /**
     * ATTENTION, cette technique va effacer tous les cercles en mémoires
     * Et en créer des nouveaux
     * ça pourrait être un problème pour la gestion du son
     * (si un son est jouer depui un cercle, et qu'il est supprimé de la mémoire, le son aussi...)
     */
    fordCircles = [];
    generateFordCircles(val);

    // if (generateFordCircles){                   //make sound on drag
    //   Tone.loaded().then(() => {
    //     sampler.triggerAttackRelease(["D#4"], 0.1);
    //   })    }
  }
  if (verticalLocked) {
    verticalx = xc - verticalxOffset;
  }
}

function mouseReleased() {
  horizontalLocked = false;
  verticalLocked = false;

}

function keyPressed() {
  // 1st circle

  if (key == "a")
    sampler.triggerAttack("D6");

  if (key == "w")
    sampler.triggerAttack("D1");

  if (key == "e")
    sampler.triggerAttack("D2");

  if (key == "d")
    sampler.triggerAttack("D3");

  if (key == "x")
    sampler.triggerAttack("D4");

  if (key == "y")
    sampler.triggerAttack("D5");

  // 2nd circle

  if (key == "f")
    sampler.triggerAttack("E6");

  if (key == "t")
    sampler.triggerAttack("E5");

  if (key == "z")
    sampler.triggerAttack("E4");

  if (key == "h")
    sampler.triggerAttack("E3");

  if (key == "b")
    sampler.triggerAttack("E2");

  if (key == "v")
    sampler.triggerAttack("E1");


  // 3rd circle

  if (key == "j")
    sampler.triggerAttack("F6");

  if (key == "i")
    sampler.triggerAttack("F1");

  if (key == "o")
    sampler.triggerAttack("F2");

  if (key == "l")
    sampler.triggerAttack("F3");

  if (key == ",")
    sampler.triggerAttack("F4");

  if (key == "m")
    sampler.triggerAttack("F5");
}
