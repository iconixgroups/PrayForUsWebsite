```javascript
// Importing shared dependencies
import { userDetails, bookings } from './main.js';

// DOM Elements
const serviceBookingForm = document.getElementById('serviceBookingForm');

// Function to book a service
function bookService(event) {
  event.preventDefault();

  const date = serviceBookingForm.elements['date'].value;
  const time = serviceBookingForm.elements['time'].value;
  const serviceType = serviceBookingForm.elements['serviceType'].value;
  const specialInstructions = serviceBookingForm.elements['specialInstructions'].value;
  const paymentMethod = serviceBookingForm.elements['paymentMethod'].value;

  const booking = {
    date,
    time,
    serviceType,
    specialInstructions,
    paymentMethod,
    userId: userDetails.id,
  };

  bookings.push(booking);

  // Send confirmation email to user
  sendConfirmationEmail(userDetails.email, booking);

  // Display booking confirmation message
  displayMessage('bookingConfirmation', 'Your booking has been confirmed. Check your email for details.');
}

// Function to send confirmation email
function sendConfirmationEmail(email, booking) {
  // This is a placeholder function. In a real application, you would integrate with an email service provider.
  console.log(`Sending confirmation email to ${email} with booking details: ${JSON.stringify(booking)}`);
}

// Function to display message
function displayMessage(id, message) {
  const messageElement = document.getElementById(id);
  messageElement.textContent = message;
  messageElement.style.display = 'block';
}

// Event Listener
serviceBookingForm.addEventListener('submit', bookService);
```