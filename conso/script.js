$(document).ready(function () {
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
        if ($current.next(".card").length === 0) {
          // If it's the last card, show the form
          $(".stepone").hide();
          $(".steptwo").show();
          return;
        }

        var $next = $current.next(".card");

        // Update the classes for animation
        $current.addClass("card--out").removeClass("card--current");
        $next.addClass("card--current").removeClass("card--out card--next");

        // Update the current card and index
        $current = $next;
        currentCardIndex++;
        updateCounter();
      }

      $cards.on("click", showNextCard);

      // Initialize the first card
      $current.addClass("card--current");
      updateCounter();
    });
  };

  // Initialize card functionality
  $(".cards").commentCards();
});

$("#firstCard").css("transform", "rotate(-5deg) translateX(25px) scale(1)");

// Apply random rotations to other cards
document.querySelectorAll(".card:not(#firstCard)").forEach(function (card) {
  var randomRotation = Math.random() * 10 - 5; // Random rotation between -5 and 5 degrees
  card.style.transform =
    "rotate(" + randomRotation + "deg) translateX(25px) scale(1)";
});

// BANNER
// BANNERS
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

//FORM
function hideForm() {
  // Prevent the form from actually submitting (which would cause a page reload)
  event.preventDefault();

  formHidden = false;

  // Find the element with the specified ID
  var containerForm = document.getElementById("containerForm");
  var stepthree = document.getElementsByClassName("stepthree");

  // Check if the element is found before trying to modify its style
  if (containerForm) {
    // Hide the form by setting its display property to 'none'
    containerForm.style.display = "none";
  } else {
    console.error("Element with ID 'containerForm' not found.");
  }

  const formElement = document.getElementById("yourFormId"); // Replace 'yourFormId' with the actual ID of your form
  if (formElement) {
    formElement.addEventListener("submit", hideForm);
    $(".steptwo").hide();
    stepthree.style.display = "block";
    $(".stepone").hide();
  }
}

$("#fullscreenCard").on("click", function () {
  $("#fullscreenText").css("opacity", "0");

  var actualCard = $("#firstCard");
  var pos = actualCard.offset();
  var width = actualCard.outerWidth();
  var height = actualCard.outerHeight();

  // Apply the reverse rotation to the fullscreen card
  $(this).css({
    transition: "all 0.5s ease",
    transform: "rotate(-5deg) translateX(25px) translateY(20px) scale(1)", // Reverse of -5 degrees
    width: width,
    height: height,
    top: pos.top,
    left: pos.left,
  });

  // Set timeout to hide the element after the transition
  setTimeout(() => {
    $(this).css({
      transition: "opacity 0.5s ease", // Opacity transition
      opacity: 0, // Fade out
    });

    // Finally, hide the element after the opacity transition completes
    setTimeout(() => {
      $(this).hide();
    }, 500); // Duration of the opacity transition
  }, 500); // Duration of the initial transform transition
});
