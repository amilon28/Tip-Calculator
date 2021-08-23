// Elements
const invalid_Bill = document.querySelector(".invalid-bill");
const invalid_People = document.querySelector(".invalid-people");
const btn = document.querySelector(".calc-btn");
const tipEl = document.querySelector(".tip");
const tipContainer = document.querySelector(".tip-container");

//Functions

const isValid = (value) => {
  console.log(+value);
  if (+value > 0 && Number.isInteger(+value)) return true;
  return false;
};

const showError = (el) => {
  el.textContent = "Hmm...not a valid number";
  el.style.color = "#B2121E";
};

//-----------------------------------------------------------
window.addEventListener("load", function () {
  document.body.style.opacity = 0.9;
});

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const bill = document.querySelector("#bill");
  console.log(bill.value);
  const opinion = document.querySelector("#opinion");
  console.log(opinion.value);
  const people = document.querySelector("#numOfpeople");
  console.log(people.value);
  console.log(tipEl);

  if (!isValid(bill.value)) {
    showError(invalid_Bill);
  }

  if (!isValid(people.value)) {
    showError(invalid_People);
  }

  if (isValid(bill.value) && isValid(opinion.value)) {
    const tip = (+bill.value * +opinion.value) / 100;
    tipEl.classList.remove("hidden");
    tipEl.querySelector("h2").textContent = `${(tip / +people.value).toFixed(
      2
    )} $`;
    tipEl.style.visibility = "visible";
    tipEl.style.top = "2%";
  }
});
