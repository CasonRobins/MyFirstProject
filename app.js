// JavaScript for Capstone Project Update #1 - Cason Robins

// Wait for the page to load
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle");
  const checklist = document.getElementById("checklist");

  // When the button is clicked, toggle visibility
  toggleButton.addEventListener("click", () => {
    if (checklist.style.display === "none") {
      checklist.style.display = "block";
      toggleButton.textContent = "Hide Deployment Checklist";
    } else {
      checklist.style.display = "none";
      toggleButton.textContent = "Show Deployment Checklist";
    }
  });

  console.log("Capstone Project JavaScript loaded successfully.");
});
