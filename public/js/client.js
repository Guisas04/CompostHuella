document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('loginButton');
    const contaButton = document.getElementById('contaButton');
    
    // Check login status
    const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

    // Update visibility
    if (isLoggedIn) {
        loginButton.classList.add('d-none');
        contaButton.classList.remove('d-none');
    } else {
        loginButton.classList.remove('d-none');
        contaButton.classList.add('d-none');
    }

    // Logout function
    window.logout = function() {
        sessionStorage.setItem("isLoggedIn", "false");
        location.reload();
    }

    window.login = function() {
        sessionStorage.setItem("isLoggedIn", "true");
        location.reload();
    }
});