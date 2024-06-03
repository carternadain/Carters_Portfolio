const navbarToggler = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function() {
  navbarNav.classList.toggle("collapse");
});

// Get the "About" and "Contact" links
const aboutLink = document.querySelector("#about-me");
const contactLink = document.querySelector("#contact");
const infoLink = document.querySelector("#info");

// Add click event listener to the "About" link
aboutLink.addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
});

// Add click event listener to the "Contact" link
contactLink.addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
});

infoLink.addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
});
// const filterBtns = document.querySelectorAll(".filter-btn");

// filterBtns.forEach(btn => {
//   btn.addEventListener("click", function() {
//     const category = this.dataset.category;
//     const cards = document.querySelectorAll(".card");

//     cards.forEach(card => {
//       if (card.dataset.category === category) {
//         card.style.display = "block";
//       } else {
//         card.style.display = "none";
//       }
//     });
//   });
// });


// // Get the card element
// const cards = document.querySelectorAll(".card");

// cards.forEach(function(card) {
//   card.addEventListener("mouseover", function() {
//     card.classList.add("hover");
//   });

//   card.addEventListener("mouseout", function() {
//     card.classList.remove("hover");
//   });
// });

const darkModeBtn = document.getElementById('darkModeBtn');
const body = document.body;

darkModeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
});




const swiper = new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




const portfolioElement = document.getElementById("portfolio");

function animateWobble() {
  portfolioElement.classList.add("animate__wobble");

  setTimeout(function() {
    portfolioElement.classList.remove("animate__wobble");
  }, 1000);
}

setInterval(animateWobble, 5000);
