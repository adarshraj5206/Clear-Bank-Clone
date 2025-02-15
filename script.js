document.getElementById("menuButton").addEventListener("click", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const icon = this.querySelector("i");

  mobileMenu.classList.toggle("hidden");

  if (icon.classList.contains("ri-menu-line")) {
    icon.classList.remove("ri-menu-line");
    icon.classList.add("ri-close-line");
  } else {
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-line");
  }
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      // Update the counter
      const currentSlide = this.activeIndex + 1;
      document.querySelector(".current").textContent = currentSlide
        .toString()
        .padStart(2, "0");
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


function changeVideo(product, countingNumber) {
  const videoElement = document.getElementById('productVideo');
  const countingElement = document.getElementById('countingNumber');
  let videoSource;

  // Update counting number
  countingElement.textContent = countingNumber;

  // Change video source
  switch (product) {
    case 'accounts':
      videoSource = 'https://clear.bank/uploads/assets/CB_Product_Accounts.webm';
      break;
    case 'clearing':
      videoSource = 'https://clear.bank/uploads/assets/CB_Product_Clearing.webm';
      break;
    case 'embedded':
      videoSource = 'https://clear.bank/uploads/assets/CB_Product_Embedded.webm';
      break;
    default:
      videoSource = 'https://clear.bank/uploads/assets/CB_Product_Accounts.webm';
  }

  videoElement.src = videoSource;
  videoElement.load();
  videoElement.play();
}