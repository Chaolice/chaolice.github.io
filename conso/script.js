$(document).ready(function () {
  //activate wow.js
  new WOW().init();

  //activate fullpage.js
  $("#fullpage").fullpage({
    scrollBar: true,
    navigation: true,
    navigationTooltips: ["Slide 1", "Slide 2", "Slide 3", "Slide 4"],
    loopBottom: true,
    sectionSelector: "section",
  });

  //apply color to each section from array
  int = -1;
  color_array = [
    "#ff5807",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
  ];

  $("section").each(function () {
    int++;
    $(this)
      .addClass("grid-item-" + int)
      .css("background-color", color_array[int]);
  });

  $("#fullpage").on(
    "afterLoad",
    function (event, origin, destination, direction) {
      if (destination.index == 1) {
        // Index 1 is Slide 2
        initBanners();
      }
    }
  );

  $.fn.commentCards = function () {
    return this.each(function () {
      var $this = $(this),
        $cards = $this.find(".card"),
        $current = $cards.first(),
        totalCards = $cards.length,
        currentCardIndex = 1;

      function updateCounter() {
        $(".counter").text(currentCardIndex + "/" + totalCards);
      }

      function showNextCard() {
        var $next = $current.next(".card");
        console.log("Current card index:", currentCardIndex); // Debugging

        if ($next.length === 0) {
          console.log("Last card reached. Resetting to first card."); // Debugging
          $next = $cards.first();
          currentCardIndex = 0; // Reset index
        }

        $current.addClass("card--out").removeClass("card--current");
        $next.addClass("card--current").removeClass("card--out card--next");

        $current = $next;
        currentCardIndex++;
        updateCounter();
      }

      $cards.on("click", showNextCard);
      $current.addClass("card--current");
      updateCounter();
    });
  };

  // Initialize card functionality
  $(".cards").commentCards();
});

// $("#firstCard").css("transform", "rotate(-5deg) translateX(25px) scale(1.3)");

// Apply random rotations to other cards
// document.querySelectorAll(".card:not(#firstCard)").forEach(function (card) {
//   var randomRotation = Math.random() * 10 - 5; // Random rotation between -5 and 5 degrees
//   card.style.transform =
//     "rotate(" + randomRotation + "deg) translateX(25px) scale(1.3)";
// });

// $("#fullscreenCard").on("click", function () {
//   $("#fullscreenText").css("opacity", "0");

//   var actualCard = $("#firstCard");
//   var pos = actualCard.offset();
//   var width = actualCard.outerWidth();
//   var height = actualCard.outerHeight();

//   // Apply the reverse rotation to the fullscreen card
//   $(this).css({
//     transition: "all 0.5s ease",
//     transform: "rotate(-5deg) translateX(25px) translateY(20px) scale(1)", // Reverse of -5 degrees
//     width: width,
//     height: height,
//     top: pos.top,
//     left: pos.left,
//   });

//   // Set timeout to hide the element after the transition
//   setTimeout(() => {
//     $(this).css({
//       transition: "opacity 0.5s ease", // Opacity transition
//       opacity: 0, // Fade out
//     });

//     // Finally, hide the element after the opacity transition completes
//     setTimeout(() => {
//       $(this).hide();
//     }, 500); // Duration of the opacity transition
//   }, 500); // Duration of the initial transform transition
// });

function initBanners() {
  const containerElement = document.getElementById("banner-container");
  containerElement.innerHTML = ""; // Clear existing content

  rows.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "row";
    const bannerElement = row.createBannerElement();
    rowElement.appendChild(bannerElement.cloneNode(true)); // Duplicate for seamless looping
    rowElement.appendChild(bannerElement);
    containerElement.appendChild(rowElement);
  });
}

class Banner {
  constructor(text, repeatCount, speed) {
    this.text = text;
    this.repeatCount = repeatCount;
    this.speed = speed;
  }

  createBannerElement() {
    const bannerElement = document.createElement("div");
    bannerElement.className = "banner animated";
    bannerElement.textContent = Array(this.repeatCount)
      .fill(this.text)
      .join(" ");

    // Set custom properties to control the animation for each row
    const duration = this.repeatCount / this.speed + "s";
    bannerElement.style.animationDuration = duration;

    return bannerElement;
  }
}

// Set your variables for each row
const rows = [
  new Banner(
    " ENTRE 39 000 ~ 52 000 PARTICULES DE MICROPLASTIQUE CONSOMMÉES PAR ANNÉE",
    10,
    0.2
  ),
  new Banner(
    " 80% DES POISSONS VENDUS CONTIENNENT DES NIVEAUX ÉLEVÉS DE MÉTAUX LOURDS",
    10,
    0.18
  ),
  new Banner(
    " 2 MILLIARDS DE PERSONNES SOUFFRENT DE MALNUTRITION DUE À UNE ALIMENTATION INADEQUATE",
    10,
    0.1
  ),
  new Banner(
    " 40% DES ALIMENTS INFANTILES CONTIENNENT DES ADDITIFS DANGEREUX",
    10,
    0.22
  ),

  new Banner(
    " ENTRE 39,000 ~ 52,000 PARTICULES DE MICROPLASTIQUE CONSOMMÉES PAR ANNÉE",
    10,
    0.2
  ),
  new Banner(
    " 420,000 PERSONNES MEURENT D'ALIMENTS CONTAMINÉS CHAQUE ANNÉE",
    10,
    0.25
  ),
  new Banner(
    " 20% DES ALIMENTS VENDUS EN FRANCE CONTIENNENT DES SUBSTANCES NOCIVES",
    10,
    0.3
  ),
  new Banner(
    " 15 CAS DE TOXICITÉ ALIMENTAIRE SIGNALÉS CETTE SEMAINE",
    10,
    0.25
  ),
  new Banner(
    " 75% DES PRODUITS BIOLOGIQUES CONTIENNENT DES PESTICIDES",
    10,
    0.3
  ),
  new Banner(
    " 1 MILLION DE PERSONNES HOSPITALISÉES EN RAISON D'ALIMENTS CONTAMINÉS CHAQUE ANNÉE",
    10,
    0.1
  ),
  new Banner(
    " 30% D'AUGMENTATION DES ALLERGIES ALIMENTAIRES EN 5 ANS",
    10,
    0.3
  ),
  new Banner(
    " 10 PRODUITS ALIMENTAIRES RETIRÉS DU MARCHÉ CE MOIS-CI",
    10,
    0.25
  ),
  new Banner(
    " 50 MILLIONS DE TONNES DE NOURRITURE GASPILLÉES CHAQUE ANNÉE EN FRANCE",
    10,
    0.1
  ),
  new Banner(
    " 3 NOUVEAUX CAS DE MALADIES D'ORIGINE ALIMENTAIRE SIGNALÉS AUJOURD'HUI",
    10,
    0.2
  ),
  new Banner(" 2 ÉPIDÉMIES ALIMENTAIRES RECENSÉES CE MOIS-CI", 10, 0.25),
];

// Set up the banner content
const containerElement = document.getElementById("banner-container");

rows.forEach((row) => {
  const rowElement = document.createElement("div");
  rowElement.className = "row";
  const bannerElement = row.createBannerElement();
  rowElement.appendChild(bannerElement.cloneNode(true)); // Duplicate for seamless looping
  rowElement.appendChild(bannerElement);
  containerElement.appendChild(rowElement);
});

//NAV

$(document).ready(function () {
  $(".burger-icon").click(function () {
    $(".burger-menu").toggleClass("active");
    $(".burger-menu-overlay").fadeToggle(0); // Fade in/out the overlay
  });

  // Close the menu and the overlay when a link inside the menu is clicked
  $(".burger-nav a").click(function () {
    $(".burger-menu").removeClass("active");
    $(".burger-menu-overlay").fadeOut(0);
  });

  // Close the menu and the overlay when the overlay itself is clicked
  $(".burger-menu-overlay").click(function () {
    $(".burger-menu").removeClass("active");
    $(this).fadeOut(0);
  });
});
$(document).ready(function () {
  // Function to generate a random rotation value between -4 and +2 degrees
  function getRandomRotation() {
    return Math.random() * 8 - 5; // Generates a random number between -4 and +2
  }

  // Select all gallery images
  var $galleryImages = $(".gallery-image");

  // Apply random initial rotation
  $galleryImages.each(function () {
    var rotation = getRandomRotation();
    $(this).css("transform", "rotate(" + rotation + "deg)");
  });

  // Reset rotation on hover
  $galleryImages.hover(
    function () {
      $(this).css("transform", "rotate(0deg)");
    },
    function () {
      var rotation = getRandomRotation();
      $(this).css("transform", "rotate(" + rotation + "deg)");
    }
  );
});
