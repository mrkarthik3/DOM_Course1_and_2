// ********** Search items ***********

const SEARCH = document.forms["search-item"].querySelector("input");

// add our event listener

SEARCH.addEventListener("keyup", (ev) => {
  // lets grab users text and convert it to lower case usin JS toLowerCase()
  let text = ev.target.value.toLowerCase();
  let groceryList = document.querySelector("#grocery-list ul");
  //   console.log(groceryList);
  let groceries = groceryList.getElementsByTagName("li");
  //   console.log(groceries);
  // let's convert the groceries HTMLCollection into an Array
  let groceriesArray = Array.from(groceries);
  console.log(groceriesArray);
  // loop through each grocery li element

  groceriesArray.forEach((grocery) => {
    let groceryName = grocery.firstElementChild.textContent;
    let groceryNameLower = groceryName.toLowerCase();
    console.log(groceryNameLower);

    // now we can use indexOf to see if our text can be found within each groceryName.
    // If nothing is found, a value of -1 is returned and we can hide the item.

    if (groceryNameLower.indexOf(text) === -1) {
      grocery.style.display = "none";
    } else {
      grocery.style.display = "block";
    }
  });
});

// ********** HIDE items ***********

let checkbox = document.querySelector("#hide");
checkbox.addEventListener("change", (ev) => {
  let groceryList = document.querySelector("#grocery-list");
  if (checkbox.checked) {
    groceryList.style.display = "none";
  } else {
    groceryList.style.display = "block";
  }
});

// ********** ADD items ***********

let formAdd = document.getElementById("add-item");

formAdd.addEventListener("submit", (ev) => {
  // prevent page from refresh
  ev.preventDefault();
  // grab user's text
  let text = formAdd.querySelector("input[type='text']").value;
  console.log(text);

  // creating list items dynamically

  let li = document.createElement("li");

  // create span elements
  let groceryName = document.createElement("span");
  let deleteButton = document.createElement("span");

  // add text to span elements
  groceryName.textContent = text;
  deleteButton.textContent = "Delete";

  // add classes to span elements
  groceryName.classList = "item";
  deleteButton.classList = "delete";

  li.appendChild(groceryName);
  li.appendChild(deleteButton);

  let UL = document.querySelector("ul");
  UL.appendChild(li);
  formAdd.querySelector("input[type='text']").value = null;
  formAdd.querySelector("input[type='text']").focus();
});

// ************** Delete Items **************

// This is inefficient.

// let buttons = document.querySelectorAll("#grocery-list li .delete");
// console.log(buttons);

// buttons.forEach((button) => {
//   button.addEventListener("click", (ev) => {
//     const LI = ev.target.parentElement;
//     console.log(LI);
//     // LI.remove();
//     LI.parentElement.removeChild(LI);
//   });
// });

// Below is 'Event Delegation' way to delete items.
let groceryListUL = document.querySelector("ul");
groceryListUL.addEventListener("click", remove);

function remove(ev) {
  target = ev.target;
  console.dir(target);
  if (target.className == "delete") {
    target.parentElement.remove();
  }
}

// ************** Tabs **************

// Lets grab our headings - our parent UL tags.

let headings = document.querySelector(".heading");

// Lets grab our panels
let panels = document.querySelectorAll(".panel");

// define a selectedItem variable to toggle between classes
let selectedPanel = null;

// take advantage of event bubbling, lets attach eventlistener on UL parent element.

headings.addEventListener("click", (ev) => {
  // lets find out which li tag triggered the event
  let target = ev.target;
  // lets use our dataset to get our data value... we've called ours 'clicked',
  // but you can call it whatever you want
  let dataAttribute = ev.target.dataset.clicked;
  console.log(dataAttribute);
  // dataAttribute is either #joke or #facts

  if (target.tagName == "LI") {
    //remove any previously selected element's c;ass
    if (selectedPanel != null) {
      selectedPanel.classList.toggle("selected");
    }
    // add newly clicked 'li' into selectedPanel
    selectedPanel = target;
    // add 'selected' class to the newly clicked 'li'
    selectedPanel.classList.toggle("selected");

    // now it is time to find the panel we want to show

    // target panel is the panel that has been clicked.
    let targetPanel = document.querySelector(dataAttribute);
    // console.log(targetPanel);
    // now we need to determine whehter the panel currently selected is the one displayed
    // We can use the forEach function because querySelectorAll returns nodeList

    panels.forEach((panel) => {
      if (panel == targetPanel) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }
});

// let's deal with button to display answer

let answerButton = document.getElementById("showAnswer");
answerButton.addEventListener("click", answer);
function answer() {
  document.getElementById("answer").classList.add("show");
  document.getElementById("answer").textContent = "AN IMPASTA";
  answerButton.style.display = "none";
}
