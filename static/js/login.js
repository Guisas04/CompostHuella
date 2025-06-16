document.addEventListener("DOMContentLoaded", function() {
    if (sessionStorage.getItem('isLoggedIn') === null) {
        sessionStorage.setItem('isLoggedIn', 'false');
    }

    const loginDropdown = document.getElementById('loginDropdown');
    const accountDropdown = document.getElementById('accountDropdown');
    const loginForm = document.querySelector('.login-dropdown');
    const logoutButton = document.querySelector('.dropdown-item.text-danger');

    let isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    function updateNavbarState() {
        if (isLoggedIn) {
            loginDropdown.style.display = 'none';
            accountDropdown.style.display = 'block';
        } else {
            loginDropdown.style.display = 'block';
            accountDropdown.style.display = 'none';
        }
    }

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        sessionStorage.setItem('isLoggedIn', 'true');
        isLoggedIn = true;
        updateNavbarState();
        $('#navbarNav').collapse('hide');
    });

    logoutButton.addEventListener('click', function(e) {
        e.preventDefault();
        sessionStorage.setItem('isLoggedIn', 'false');
        isLoggedIn = false;
        updateNavbarState();
        $('#navbarNav').collapse('hide');
    });

    updateNavbarState();

    $('.dropdown-toggle').dropdown();
});