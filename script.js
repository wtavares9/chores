document.addEventListener("DOMContentLoaded", function () {
  // Function to save checkbox state
  function saveCheckboxState() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        localStorage.setItem(checkbox.id, checkbox.checked);
      });
    });
  }

  // Function to load checkbox state
  function loadCheckboxState() {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(function (checkbox) {
      const savedState = localStorage.getItem(checkbox.id);
      if (savedState !== null) {
        checkbox.checked = JSON.parse(savedState);
      }
    });
  }

  // Call the functions to load the state and save it when changed
  loadCheckboxState();
  saveCheckboxState();
});
