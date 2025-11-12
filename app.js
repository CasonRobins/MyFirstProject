// Toggle the deployment checklist visibility
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleChecklist");
  const checklist = document.getElementById("deploymentChecklist");
  if (!toggleButton || !checklist) return;

  toggleButton.addEventListener("click", () => {
    const isHidden = checklist.classList.toggle("hidden");
    toggleButton.textContent = isHidden
      ? "Show deployment checklist"
      : "Hide deployment checklist";
  });
});
