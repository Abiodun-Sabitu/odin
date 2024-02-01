const inputField = document.querySelector("#input_field");
const addItem = document.querySelector(".add_item");
const container = document.querySelector("ul");
inputField.focus();

function addNewItem() {
  const item = inputField.value;

  const list = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");
  list.appendChild(span);
  span.textContent = item;
  list.appendChild(deleteBtn);
  deleteBtn.textContent = "Delete";
  container.appendChild(list);
  deleteBtn.onclick = function () {
    container.removeChild(list);
  };
  deleteBtn.addEventListener("click", () => container.removeChild(list));
}

addItem.onclick = addNewItem;
