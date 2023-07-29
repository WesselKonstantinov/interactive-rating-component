const form = document.querySelector(".js-form");
const rating = document.querySelector(".js-rating");
const thankYouSection = document.querySelector(".js-thanks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedRating = e.target.rating.value;
  e.target.parentElement.hidden = "true";
  rating.innerText = selectedRating;
  thankYouSection.classList.remove("card--hidden");
});
