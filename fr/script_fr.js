// CARD HOVER //
let myPanel = document.getElementById("panel");
let subpanel = document.getElementById("panel-container");

myPanel.onmousemove = transformPanel;
myPanel.onmouseenter = handleMouseEnter;
myPanel.onmouseleave = handleMouseLeave;

let mouseX, mouseY;

let transformAmount = 5;

function transformPanel(mouseEvent) {
    mouseX = mouseEvent.pageX;
    mouseY = mouseEvent.pageY;

    const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
    const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

    const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
    const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

    subpanel.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
}

function handleMouseEnter() {
    setTimeout(() => {
        subpanel.style.transition = "";
    }, 100);
    subpanel.style.transition = "transform 0.1s";
}

function handleMouseLeave() {
    subpanel.style.transition = "transform 0.1s";
    setTimeout(() => {
        subpanel.style.transition = "";
    }, 100);

    subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}
// TYPING TEXT //
new TypeIt("#companionMethods", {
  speed: 50,
  waitUntilVisible: true
})
  .type("Tu m'as surprs", {delay: 300})
  .move(-1)
  .delete(3)
  .type('rpri')
  .move('END')
  .type(' alors que jesuuis enco')
  .pause(300)
  .delete(10)
  .type(' suis encore en train de me préprer.')
  .move(-4)
  .type('a')
  .move('END')
  .break({delay: 500})
  .type('Désolé pour les fautes, je ne pensais pas voir du monde.')
  .pause(500)
  .break({delay: 500})
  .break({delay: 500})
  .type('Reviens bientôt !')
  .go();
