// Date - automatic update

const currentDate = new Date();
const year = currentDate.getFullYear();

const yearElement = document.querySelector("[data-year]");
yearElement.innerHTML = year;

// Hamburger for mobile

const hamburgerButton = document.querySelector("#hamburger");
const navList = document.querySelector("#nav-list");

function toggleButton() {
  navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);

// Cookie banner

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000); 