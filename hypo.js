let sides = document.querySelectorAll(".sides");
let btn = document.querySelector(".btn");
let display = document.querySelector(".display");
btn.addEventListener("click", () => {
  let sumOfSquOfvalues =
    Number(sides[0].value ** 2) + Number(sides[1].value ** 2);
  let lengthOfhypo = Math.sqrt(sumOfSquOfvalues);
  display.innerText = `length of hypotenus : ${lengthOfhypo}`;
});
