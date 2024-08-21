document.addEventListener('DOMContentLoaded', function() {
    // Disable text input or any edits in the checkboxes' parent td elements
    let tds = document.querySelectorAll('td');
    tds.forEach(td => {
        td.contentEditable = false;
    });

    // Add event listeners to each checkbox to save its state to local storage
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        // Load the saved state
        checkbox.checked = localStorage.getItem(checkbox.parentNode.textContent.trim()) === 'true';

        // Save the state on click
        checkbox.addEventListener('change', function() {
            localStorage.setItem(checkbox.parentNode.textContent.trim(), checkbox.checked);
        });
    });
});
