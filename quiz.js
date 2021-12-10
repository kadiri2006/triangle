let form_quiz = document.querySelector("#quiz");
let btn = document.querySelector(".btn");
let display = document.querySelector(".display");

btn.addEventListener("click", calculate);

let Answers = ["90", "right angled", "krishna"];

function calculate() {
  let index = 0;
  let score = 0;
  const myFormData = new FormData(form_quiz);
  for (let entry of myFormData.values()) {
    if (entry === Answers[index]) {
      score += 1;
    }
    index += 1;
  }
  display.innerText = `your score is ${score}`;
}
