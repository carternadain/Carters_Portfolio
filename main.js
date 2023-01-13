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