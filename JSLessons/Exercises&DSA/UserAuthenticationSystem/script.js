let currentUser = null; 
let g_userCount = 0;
const data = [];

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    console.log(`Login: Email - ${email}, Password - ${password}`);
    currentUser = email;
    updateNavbar();
}

function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const phone = document.getElementById('register-phone').value;

    if (isEmailRegistered(email)) {
        console.log('Email is already registered. Please use a different email.');
        return;
    }

    console.log(`Register: Username - ${username}, Email - ${email}, Password - ${password}, Phone - ${phone}`);

    // Assuming the data array is a global variable
    data[g_userCount] = {
        user_name: username,
        user_email: email,
        user_pass: password,
        phone_number: phone
    };

    g_userCount++;

    currentUser = email;
    updateNavbar();
}

function isEmailRegistered(email) {
    // Check if the email is already registered
    for (let i = 0; i < g_userCount; i++) {
        if (data[i].user_email === email) {
            return true;
        }
    }
    return false;
}

function logout() {
    currentUser = null;
    updateNavbar();
}

function updateNavbar() {
    const loginRegisterLinks = document.getElementById('login-register-links');
    const logoutLink = document.getElementById('logout-link');

    if (currentUser) {
        
        loginRegisterLinks.style.display = 'none';
        logoutLink.style.display = 'block';
    } else {
        loginRegisterLinks.style.display = 'block';
        logoutLink.style.display = 'none';
    }
}
