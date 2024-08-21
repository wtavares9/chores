document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                this.parentNode.style.color = '#aaa';
                this.parentNode.style.textDecoration = 'line-through';
            } else {
                this.parentNode.style.textDecoration = 'none';
                this.parentNode.style.color = '#000';
            }
        });
    });
});
