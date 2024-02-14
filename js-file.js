// The main variables

let firstInputs = "";
let secondInputs = "";
let operator = null;

let screen = document.querySelector(".screen");
let btnNumbers = document.querySelectorAll(".number");
let clearBtn = document.querySelector(".clear");
let percentageBtn = document.querySelector(".percentage");
let toggleBtn = document.querySelector(".toggle_num_type");
// console.log(btnNumbers);
//console.log(clearBtn.textContent);

// update screen content
const updateScreen = () => {
  screen.textContent = firstInputs;
};

// clear screen content
clearBtn.addEventListener("click", () => {
  screen.textContent = 0;
  firstInputs = "";
  secondInputs = "";
});

//percentage
percentageBtn.addEventListener("click", () => {
  screen.textContent = screen.textContent / 100;
});

// toggle positive or negative numbers
const makeNegativeOrPositiveNumber = () => {
  screen.textContent = -screen.textContent;
};
toggleBtn.addEventListener("click", () => {
  !makeNegativeOrPositiveNumber();
});

//update screen content for firstInputs
btnNumbers.forEach((btnNumber) => {
  btnNumber.addEventListener("click", () => {
    firstInputs += btnNumber.textContent;
    updateScreen();
  });
});
