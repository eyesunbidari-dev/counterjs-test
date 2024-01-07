// const incrementBtn = document.querySelector(".increment");
// const counterValue = document.querySelector(".counter__value");
// const resetBtn = document.querySelector(".reset");
// let count = Number(counterValue.textContent);
// incrementBtn.addEventListener("click", () => {
//    count++;
//    counterValue.textContent = count;
// });
// const decrementBtn = document.querySelector(".decrement");
// decrementBtn.addEventListener("click", () => {
//    count--;
//    counterValue.textContent = count;
// })
// function reset () {
//    count = 0;
//    counterValue.textContent=count
// }
// resetBtn.addEventListener("click" , reset);

// second approach
const counterValue = document.querySelector(".counter__value");
let count = Number(counterValue.textContent);
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const classList = btn.classList;

    if (classList.contains("increment")) count++;
    else if (classList.contains("decrement")) count--;
    else count = 0;

    if (count > 0) counterValue.style.color = "green";
    else counterValue.style.color = "red";

    counterValue.textContent = count;
  });
});
