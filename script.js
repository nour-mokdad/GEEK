// Year in footer
var yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Reviews slider (moves ONLY the reviews row)
var reviewsRow = document.getElementById("reviews");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");

if (reviewsRow && prevBtn && nextBtn) {
  var step = 336; // 320 card width + 16 gap
  var currentIndex = 0;

  function updateSlider() {
    reviewsRow.style.transform = "translateX(" + (-currentIndex * step) + "px)";
  }

  nextBtn.addEventListener("click", function () {
    var totalCards = reviewsRow.children.length;
    var maxIndex = totalCards - 3; // show 3 at a time
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
}

//start of form

document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector(".contact-form");
  const overlay = document.getElementById("thankYouOverlay");
  const closeBtn = document.getElementById("closeThankYou");

  /* Submit form using PHP */
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = new FormData(form);

      fetch("submit_form.php", {
        method: "POST",
        body: formData
      })
      .then(response => response.text())
      .then(result => {
        if (result.trim() === "success") {
          overlay.style.display = "flex";
          form.reset();
        } else {
          alert("Something went wrong. Please try again.");
        }
      })
      .catch(error => {
        alert("Connection error.");
      });
    });
  }

  /* Close thank you overlay */
  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      overlay.style.display = "none";
    });
  }

});





//end of form
