document.addEventListener("DOMContentLoaded", () => {
  function addListener() {
    document.querySelectorAll(".item").forEach(button => {
      button.addEventListener("click", function () {
        this.style.textDecoration = "line-through";
        this.style.color = "red";
      });
    });
  }

  addListener(); // Add event listeners to existing items

  document.getElementById("new-item").addEventListener("click", () => {
    let itemText = prompt("Enter your item", "");
    
    if (itemText) { // Ensure input isn't empty
      document.getElementById("list").insertAdjacentHTML("afterbegin", `<li class="card-item"><button class="item">${itemText}</button></li>`);
      addListener(); // Reapply event listeners to new items
    }
  });
});

document.getElementById("clear-list").addEventListener("click", function () {
  clearList();
});

function clearList() {
  document.getElementById("list").innerHTML = "";
}