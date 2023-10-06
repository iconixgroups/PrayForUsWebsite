```javascript
// Importing required dependencies
import { userDetails } from './main.js';
import { otp_verification } from './otp_verification.js';

// Selecting the registration form
const registrationForm = document.getElementById('registrationForm');

// Function to register a new user
function registerUser(e) {
  e.preventDefault();

  // Getting form values
  const firstName = registrationForm['firstName'].value;
  const lastName = registrationForm['lastName'].value;
  const email = registrationForm['email'].value;
  const password = registrationForm['password'].value;

  // Checking if user already exists
  if (userDetails.some(user => user.email === email)) {
    alert('User already exists!');
    return;
  }

  // Creating new user object
  const newUser = {
    firstName,
    lastName,
    email,
    password,
    savedChurches: []
  };

  // Adding new user to userDetails
  userDetails.push(newUser);

  // Sending OTP for verification
  otp_verification.sendOTP(email);

  // Clearing the form
  registrationForm.reset();
}

// Event listener for form submission
registrationForm.addEventListener('submit', registerUser);
```