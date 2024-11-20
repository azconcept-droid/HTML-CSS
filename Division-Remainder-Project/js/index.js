const number = document.querySelector("#your-number");
const output = document.querySelector("#output");

number.addEventListener("keyup", () => {
  console.log(number.value);
  output.textContent = evenOrOdd(number.value);
});
