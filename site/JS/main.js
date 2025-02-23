document.addEventListener("DOMContentLoaded", () => {
document.getElementById("button").addEventListener("click", () => {
    document.getElementById("button").style.textDecoration = "line-through";
  });
});

// Create page to display form to submit items for list, add to array, display items once done is clicked, add reset button