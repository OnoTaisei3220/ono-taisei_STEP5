
const textInput = document.getElementById("textInput");
const showButton = document.getElementById("showButton");
const bgButton = document.getElementById("bgButton");
const addButton = document.getElementById("addButton");
const displayArea = document.getElementById("displayArea");
const mirrorArea = document.getElementById("mirrorArea");
const addCount = document.getElementById("addCount");
const tableBody = document.getElementById("tableBody");

const bgColors = ["lightblue", "lightgreen", "lightcoral"];
let bgIndex = 0;

function updateAddCount() {
  const count = tableBody.children.length;
  addCount.textContent = count;
  showButton.style.display = count >= 3 ? "none" : "inline-block";
}

function addRow(text) {
  if (tableBody.children.length >= 3) {
    tableBody.removeChild(tableBody.firstElementChild);
  }

  const row = document.createElement("tr");
  const textCell = document.createElement("td");
  textCell.textContent = text;

  const actionCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  deleteBtn.addEventListener("click", () => {
    row.remove();
    updateAddCount();
  });

  actionCell.appendChild(deleteBtn);
  row.appendChild(textCell);
  row.appendChild(actionCell);
  tableBody.appendChild(row);
  updateAddCount();
}

showButton.addEventListener("click", () => {
  const value = textInput.value.trim();
  if (!value) {
    alert("入力値が空です。");
    return;
  }
  displayArea.textContent = value;
  displayArea.classList.toggle("highlight");
});

bgButton.addEventListener("click", () => {
  document.body.style.backgroundColor = bgColors[bgIndex];
  bgIndex = (bgIndex + 1) % bgColors.length;
});

addButton.addEventListener("click", () => {
  const value = textInput.value.trim();
  if (!value) {
    alert("入力値が空です。");
    return;
  }
  addRow(value);
});

textInput.addEventListener("input", () => {
  mirrorArea.textContent = textInput.value || "入力内容をここに表示します";
});

for (let i = 1; i <= 5; i += 1) {
  console.log(`ループ回数: ${i}`);
}

updateAddCount();
