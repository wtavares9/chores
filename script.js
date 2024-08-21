document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Load saved states from localStorage and apply them
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        
        if (savedState) {
            checkbox.checked = savedState === 'true';
        }

        // Apply styles based on the checkbox state
        if (checkbox.checked) {
            checkbox.parentNode.style.color = '#aaa';
            checkbox.parentNode.style.textDecoration = 'line-through';
        } else {
            checkbox.parentNode.style.color = '#000';
            checkbox.parentNode.style.textDecoration = 'none';
        }

        // Add event listener to save state and apply styles
        checkbox.addEventListener('change', function () {
            localStorage.setItem(checkbox.id, checkbox.checked);
            if (this.checked) {
                this.parentNode.style.color = '#aaa';
                this.parentNode.style.textDecoration = 'line-through';
            } else {
                this.parentNode.style.color = '#000';
                this.parentNode.style.textDecoration = 'none';
            }
        });
    });
});
