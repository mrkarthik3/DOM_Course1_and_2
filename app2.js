let content = document.getElementById("content");

let button = document.getElementById("show-more");

// adding event listener and handler

button.onclick = () => {
  if (content.className == "") {
    content.className = "open";
    button.innerHTML = "Collapse Now";
  } else {
    content.className = "";
    button.textContent = "Expand";
  }
};
