const incrementBtn = document.querySelector(".increment");
const counterValue = document.querySelector(".counter__value");
const resetBtn = document.querySelector(".reset");
let count = Number(counterValue.textContent);
incrementBtn.addEventListener("click", () => {
   count++;
   counterValue.textContent = count;
});
const decrementBtn = document.querySelector(".decrement");
decrementBtn.addEventListener("click", () => {
   count--;
   counterValue.textContent = count;
})
function reset () {
   count = 0;
   counterValue.textContent=count
}
resetBtn.addEventListener("click" , reset);