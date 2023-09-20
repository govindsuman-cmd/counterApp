const increase = document.getElementById("inc");
const decrease = document.getElementById("dec");
const output = document.getElementById("output");

let count = 0;
function updateCount() {
  output.textContent = count;
}

increase.addEventListener("click", incr);
function incr() {
  count++;
  updateCount();
}
decrease.addEventListener("click", decr);
function decr() {
  count--;
  updateCount();
}
