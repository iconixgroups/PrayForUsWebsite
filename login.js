```javascript
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        loginUser();
    });
});

function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Mocked user data, replace with actual data from your database
    const userDetails = {
        email: 'test@test.com',
        password: 'password123'
    };

    if(email === userDetails.email && password === userDetails.password) {
        localStorage.setItem('user', JSON.stringify(userDetails));
        window.location.href = 'user_profile.html';
    } else {
        alert('Invalid email or password');
    }
}

function navigateToSignUp() {
    window.location.href = 'signup.html';
}

function navigateToResetPassword() {
    window.location.href = 'reset_password.html';
}
```