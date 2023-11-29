$(document).ready(function () {
  $.fn.commentCards = function () {
    return this.each(function () {
      var $this = $(this),
        $cards = $this.find(".card"),
        $current = $cards.filter(".card--current"),
        $next,
        totalCards = $cards.length,
        currentCardIndex = $cards.index($current) + 1;

      function updateCounter() {
        $(".counter").text(currentCardIndex + "/" + totalCards);
      }

      $cards.on("click", function () {
        if (!$current.is(this)) {
          $cards.removeClass("card--current card--out card--next");
          $current.addClass("card--out");
          $current = $(this).addClass("card--current");
          $next = $current.next();
          $next = $next.length ? $next : $cards.first();
          $next.addClass("card--next");

          currentCardIndex = $cards.index($current) + 1;
          updateCounter();

          // Check if it's the last card
          if (currentCardIndex === totalCards) {
            // Show the form
            $(".stepone").hide();
            $(".steptwo").show();
          }
        }
      });

      if (!$current.length) {
        $current = $cards.last();
        $cards.first().trigger("click");
      }

      $this.addClass("cards--active");

      // Add counter element
      updateCounter();
    });
  };

  // Initialize card functionality
  $(".cards").commentCards();

  // Form submission
  window.hideForm = function () {
    // Prevent the form from actually submitting (which would cause a page reload)
    event.preventDefault();

    // Find the element with the specified ID
    var containerForm = document.getElementById("containerForm");

    // Check if the element is found before trying to modify its style
    if (containerForm) {
      // Hide the form by setting its display property to 'none'
      containerForm.style.display = "none";
    } else {
      console.error("Element with ID 'containerForm' not found.");
    }

    // Show the banners
    $(".steptwo").hide();
    $(".stepthree").show();
  };
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
  new Banner(" PROMOTION DU MOMENT |", 10, 0.3),
  new Banner(" 8 ACHETÉS, 0 CONSOMMÉ |", 10, 0.25),
  new Banner(" EN SOLDES EN CE MOMENT : VOTRE SANTÉ! |", 10, 0.15),
  new Banner(" PROMOTION DU MOMENT |", 10, 0.3),
  new Banner(" 8 ACHETÉS, 0 CONSOMMÉ |", 10, 0.25),
  new Banner(" EN SOLDES EN CE MOMENT : VOTRE SANTÉ! |", 10, 0.15),
  new Banner(" PROMOTION DU MOMENT |", 10, 0.3),
  new Banner(" DE PERSONNES ONT SIGNÉS LA PÉTITION |", 10, 0.25),
  new Banner(" EN SOLDES EN CE MOMENT : VOTRE SANTÉ! |", 10, 0.15),
  new Banner(" PROMOTION DU MOMENT |", 10, 0.3),
  new Banner(" 8 ACHETÉS, 0 CONSOMMÉ |", 10, 0.25),
  new Banner(" EN SOLDES EN CE MOMENT : VOTRE SANTÉ! |", 10, 0.15),
  new Banner(" 8 ACHETÉS, 0 CONSOMMÉ |", 10, 0.25),
  new Banner(" EN SOLDES EN CE MOMENT : VOTRE SANTÉ! |", 10, 0.15),
  new Banner(" EN SOLDES EN CE MOMENT : VOTRE SANTÉ! |", 10, 0.15),
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
