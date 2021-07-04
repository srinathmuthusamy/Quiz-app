const var1 = (document.querySelector(".points").textContent = 100);
const var2 = (document.querySelector(".points").textContent = "Points: 0");

document.querySelector(".one").addEventListener("click", function () {
  document.querySelector(
    ".result"
  ).textContent = `Your'e Wrong the answer was Mahatma Gandhi`;
  document.querySelector(".points").textContent = "Points: 0";
  document.querySelector(".hidden").classList.remove("hidden");
});
document.querySelector(".two").addEventListener("click", function () {
  document.querySelector(
    ".result"
  ).textContent = `Your'e Right the answer is Mahatma Gandhi`;
  document.querySelector(".points").textContent = "Points: 100";
  document.querySelector(".hidden").classList.remove("hidden");
});
document.querySelector(".three").addEventListener("click", function () {
  document.querySelector(
    ".result"
  ).textContent = `Your'e Wrong the answer was Mahatma Gandhi`;
  document.querySelector(".points").textContent = "Points: 0";
  document.querySelector(".hidden").classList.remove("hidden");
});
document.querySelector("#take").addEventListener("click", function () {
  document.querySelector("#show").classList.remove("hidden");
  document.querySelector("#whole").classList.add("hidden");
});
document.querySelector("#option12").addEventListener("click", function () {
  document.querySelector(
    "#Srinath"
  ).textContent = `Your'e Wrong the answer was Narendra Modhi`;
  document.querySelector(".points").textContent = `Points: ${var1 + 0}`;
  document.querySelector(".whole").classList.add("hidden");
  document.querySelector(
    "#take"
  ).textContent = `Congrats you finished the quiz`;
});
document.querySelector("#option22").addEventListener("click", function () {
  document.querySelector(
    "#Srinath"
  ).textContent = `Your'e Wrong the answer is Narendra Modhi`;
  document.querySelector(".points").textContent = `Points:  ${var1 + 0}`;
  document.querySelector(".whole").classList.add("hidden");
  document.querySelector(
    "#take"
  ).textContent = `Congrats you finished the quiz`;
});
document.querySelector("#option32").addEventListener("click", function () {
  document.querySelector(
    "#Srinath"
  ).textContent = `Your'e Right the answer was Narendra Modhi`;
  document.querySelector(".points").textContent = `Points: ${var1 + 100}`;
  document.querySelector(".whole").classList.add("hidden");
  document.querySelector(
    "#take"
  ).textContent = `Congrats you finished the quiz`;
});
console.log(this);