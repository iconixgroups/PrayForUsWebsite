```javascript
// OTP Verification
const otpForm = document.getElementById('otpForm');
const otpInput = document.getElementById('otpInput');
const otpError = document.getElementById('otpError');

otpForm.addEventListener('submit', function(event) {
  event.preventDefault();
  verifyOTP();
});

function verifyOTP() {
  const otp = otpInput.value;
  if (!otp) {
    otpError.textContent = 'Please enter the OTP.';
    return;
  }

  // Simulate OTP verification
  const isOTPValid = Math.random() > 0.5;

  if (isOTPValid) {
    otpError.textContent = '';
    alert('OTP verified successfully!');
    window.location.href = 'user_profile.html';
  } else {
    otpError.textContent = 'Invalid OTP. Please try again.';
  }
}
```