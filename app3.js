let para = document.createElement("p");
para.textContent = "This is pure DOM Manipulation";

let parent = document.getElementById("note");
parent.appendChild(para);

let circle = document.getElementById("circle");
// circle.addEventListener("click", () => {
//   changeColor();
// });

circle.addEventListener("click", changeColor);

function changeColor() {
  //   let randomColor = Math.floor(Math.random() * 16777216);
  let Rred = Math.floor(Math.random() * 256 + 1);
  let Rblue = Math.floor(Math.random() * 256 + 1);
  let Rgreen = Math.floor(Math.random() * 256 + 1);

  //   console.log(randR);
  circle.style.backgroundColor = `rgb(${Rred}, ${Rblue}, ${Rgreen})`;
}
