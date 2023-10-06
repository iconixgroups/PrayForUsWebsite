```javascript
document.getElementById('registrationForm').addEventListener('submit', registerUser);

function registerUser(e) {
    e.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        savedChurches: []
    };

    // Check if user already exists in the database
    let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    let userExists = existingUsers.find(user => user.email === email);

    if (userExists) {
        alert('User already exists. Please login.');
        window.location.href = 'login.html';
    } else {
        existingUsers.push(userDetails);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        alert('Registration successful. Please check your email for OTP verification.');
        window.location.href = 'otp_verification.html';
    }
}
```