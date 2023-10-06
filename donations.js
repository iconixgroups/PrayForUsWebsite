```javascript
// donations.js

// Import shared dependencies
import { userDetails, donations } from './shared.js';

// Get DOM elements
const donationForm = document.getElementById('donationForm');
const donationConfirmation = document.getElementById('donationConfirmation');

// Function to make a donation
function makeDonation(event) {
  event.preventDefault();

  // Get form data
  const donationAmount = donationForm.amount.value;
  const donationType = donationForm.type.value;
  const paymentMethod = donationForm.paymentMethod.value;

  // Create new donation object
  const newDonation = {
    userId: userDetails.id,
    amount: donationAmount,
    type: donationType,
    paymentMethod: paymentMethod,
    date: new Date()
  };

  // Add new donation to donations array
  donations.push(newDonation);

  // Display confirmation message
  donationConfirmation.textContent = 'Thank you for your donation!';

  // Clear form
  donationForm.reset();
}

// Event listener for donation form submission
donationForm.addEventListener('submit', makeDonation);
```