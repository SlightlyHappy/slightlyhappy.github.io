document.addEventListener("DOMContentLoaded", function() {
    const blogMenu = document.querySelector('.blog-menu:nth-child(4)');
    const blogDropdown = document.querySelector('.blog-dropdown');

    blogMenu.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent clicks from bubbling up
        blogDropdown.classList.toggle('blog-dropdown-active'); // Toggle visibility
    });

    // Prevent dropdown from closing immediately after clicking on it
    blogDropdown.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // Close the dropdown ONLY when clicking outside both menu AND dropdown
    document.addEventListener('click', function(event) {
        const clickedOutsideMenu = !blogMenu.contains(event.target);
        const clickedOutsideDropdown = !blogDropdown.contains(event.target);

        if (clickedOutsideDropdown) { // Only check if clicked outside dropdown
            blogDropdown.classList.remove('blog-dropdown-active');
        }
    });
});
