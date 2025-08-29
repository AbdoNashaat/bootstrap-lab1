(() => {
    'use strict';

    document.addEventListener('DOMContentLoaded', () => {
        const registrationForm = document.getElementById('registration-form');
        if (registrationForm) {
            registrationForm.addEventListener('submit', event => {
                if (!registrationForm.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    const email = registrationForm.querySelector('#exampleInputEmail1').value;
                    localStorage.setItem('registeredEmail', email);
                    window.location.href = 'login.html';
                }
                registrationForm.classList.add('was-validated');
            }, false);
        }

        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            const storedEmail = localStorage.getItem('registeredEmail');
            if (storedEmail) {
                const emailInput = loginForm.querySelector('#exampleInputEmail1');
                if (emailInput) {
                    emailInput.value = storedEmail;
                }
            }

            loginForm.addEventListener('submit', event => {
                if (!loginForm.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    event.preventDefault();
                    const email = loginForm.querySelector('#exampleInputEmail1').value;
                    const rememberMe = loginForm.querySelector('#exampleCheck1').checked;
                    if (rememberMe) {
                        localStorage.setItem('registeredEmail', email);
                    } else {
                        localStorage.removeItem('registeredEmail');
                    }
                }
                loginForm.classList.add('was-validated');
            }, false);
        }
    });
})();