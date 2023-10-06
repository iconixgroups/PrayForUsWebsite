```javascript
document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    sendOTP(email);
});

function sendOTP(email) {
    // This is a placeholder for the function that sends the OTP.
    // In a real-world application, this would be replaced with an API call to the server.
    console.log(`OTP sent to ${email}`);
}

document.getElementById('otpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const otp = document.getElementById('otp').value;
    verifyOTP(otp);
});

function verifyOTP(otp) {
    // This is a placeholder for the function that verifies the OTP.
    // In a real-world application, this would be replaced with an API call to the server.
    console.log(`OTP ${otp} verified`);
}

document.getElementById('newPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newPassword = document.getElementById('newPassword').value;
    resetPassword(newPassword);
});

function resetPassword(newPassword) {
    // This is a placeholder for the function that resets the password.
    // In a real-world application, this would be replaced with an API call to the server.
    console.log(`Password reset to ${newPassword}`);
}
```