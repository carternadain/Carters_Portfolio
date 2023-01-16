const navbarToggler = document.querySelector(".navbar-toggler");
const navbarNav = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function() {
  navbarNav.classList.toggle("collapse");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const filterBtns = document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {
  btn.addEventListener("click", function() {
    const category = this.dataset.category;
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      if (card.dataset.category === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


// Get the card element
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
  card.addEventListener("mouseover", function() {
    card.classList.add("hover");
  });

  card.addEventListener("mouseout", function() {
    card.classList.remove("hover");
  });
});

// const card = document.querySelector(".card");

// // Add a mouseover event listener to the card
// card.addEventListener("mouseover", function() {
//   // Add the "hover" class to the card when the mouse is over it
//   card.classList.add("hover");
// });

// // Add a mouseout event listener to the card
// card.addEventListener("mouseout", function() {
//   // Remove the "hover" class from the card when the mouse is not over it
//   card.classList.remove("hover");
// });