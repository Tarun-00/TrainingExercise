function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function getMachineName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(window.location.hostname);
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  changeBackgroundColor();
  setInterval(changeBackgroundColor, 3000);

  getMachineName().then((machineName) => {
    document.getElementById("machine-name").textContent = machineName;
  });

  // Add event listener for the 'Create List' button
  document
    .getElementById("create-list-button")
    .addEventListener("click", () => {
      createList();
    });
});

function createList() {
  let number;
  do {
    number = prompt("Please enter a number between 21 and 99:");
    if (number === null) return; // User canceled the prompt
    number = parseInt(number, 10);
  } while (isNaN(number) || number < 21 || number > 99);

  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = ""; // Clear any existing list

  const ul = document.createElement("ul");

  for (let i = 1; i <= number; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    li.style.color = getRandomColor(); // Assign a random color to each list item
    ul.appendChild(li);
  }

  listContainer.appendChild(ul);
}
