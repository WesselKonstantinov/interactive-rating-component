const radioButtons = document.querySelectorAll(".js-radio");
const submitButton = document.querySelector(".js-submit");

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    submitButton.removeAttribute("disabled");
  });
});

const form = document.querySelector(".js-form");
const rating = document.querySelector(".js-rating");
const thankYouSection = document.querySelector(".js-thanks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const selectedRating = e.target.rating.value;
  e.target.parentElement.classList.add("card--hidden");
  rating.innerText = selectedRating;
  thankYouSection.classList.remove("card--hidden");
});
