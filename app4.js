let output = document.getElementById("output");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  output.textContent = `A submit event has been fired at ${event.timeStamp}`;
});

let nameText = document.querySelector("input[type=text]");

nameText.addEventListener("input", () => {
  output.textContent = `The value entered is ${nameText.value}`;
});

nameText.addEventListener("focus", (ev) => {
  //   console.log(ev);
  ev.target.style.background = "lightblue";
  ev.target.style.color = "black";
});

nameText.addEventListener("copy", () => {
  alert("you have copied the text");
});

nameText.addEventListener("paste", () => {
  alert("you have pasted the text");
});
