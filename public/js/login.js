document.addEventListener("DOMContentLoaded", function() {
    // Initialize session storage if not exists
    if (sessionStorage.getItem('isLoggedIn') === null) {
        sessionStorage.setItem('isLoggedIn', 'false');
    }

    // Get relevant elements
    const loginDropdown = document.getElementById('loginDropdown');
    const accountDropdown = document.getElementById('accountDropdown');
    const loginForm = document.querySelector('.login-dropdown');
    const logoutButton = document.querySelector('.dropdown-item.text-danger');

    // Check initial login status
    let isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    // Update navbar state
    function updateNavbarState() {
        if (isLoggedIn) {
            loginDropdown.style.display = 'none';
            accountDropdown.style.display = 'block';
        } else {
            loginDropdown.style.display = 'block';
            accountDropdown.style.display = 'none';
        }
    }

    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add actual login validation here
        sessionStorage.setItem('isLoggedIn', 'true');
        isLoggedIn = true;
        updateNavbarState();
        $('#navbarNav').collapse('hide');
    });

    // Handle logout
    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        sessionStorage.setItem('isLoggedIn', 'false');
        isLoggedIn = false;
        updateNavbarState();
        $('#navbarNav').collapse('hide');
    });

    // Initial state update
    updateNavbarState();

    // Bootstrap dropdown fix
    $('.dropdown-toggle').dropdown();
});