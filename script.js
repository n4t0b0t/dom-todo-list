const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

const listContainer = document.querySelector("#todo-list");

function generateList(array) {
  for (element of array) {
    const li = document.createElement("li");
    li.innerHTML =
      "<p>" + element + "</p> <input id='completed' type='checkbox' />";
    listContainer.appendChild(li);
  }
}

generateList(tasks);

const submitButton = document.querySelector("button");

function addNewItem() {
  const newItem = document.querySelector("#todo-item").value;
  tasks.push(newItem);
  const li = document.createElement("li");
  li.innerHTML =
    "<p>" + newItem + "</p> <input id='completed' type='checkbox' />";
  document.querySelector("#todo-list").appendChild(li);
}

submitButton.addEventListener("click", addNewItem);
document.body.addEventListener("keydown", function(e) {
  if (e.key === 13) {
    addNewItem();
  }
});

listContainer.addEventListener("click", function(event) {
  if (event.target.type === "checkbox") {
    event.target.previousElementSibling.classList.toggle("done");
  }
});
