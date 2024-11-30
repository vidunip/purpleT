document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    let isOpen = false;

    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.innerWidth <= 1100) {  // Only for mobile screens
            isOpen = !isOpen;
            if (isOpen) {
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.opacity = '1';
            } else {
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.opacity = '0';
            }
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 1100 && !e.target.closest('.dropdown') && isOpen) {
            isOpen = false;
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.opacity = '0';
        }
    });
});
