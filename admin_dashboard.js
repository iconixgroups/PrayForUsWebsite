```javascript
// Importing shared dependencies
import { churchListings, bookings, events, donations } from './main.js';

// DOM Elements
const adminDashboard = document.getElementById('adminDashboard');

// Function to manage listings
function manageListings() {
  // Code to add, edit, delete listings
}

// Function to manage bookings
function manageBookings() {
  // Code to view and manage all bookings
}

// Function to manage event registrations
function manageRegistrations() {
  // Code to view and manage all event registrations
}

// Function to manage donations
function manageDonations() {
  // Code to view and manage all donations
}

// Event listeners for managing listings, bookings, registrations, donations
adminDashboard.addEventListener('click', (event) => {
  if (event.target.id === 'manageListings') {
    manageListings();
  } else if (event.target.id === 'manageBookings') {
    manageBookings();
  } else if (event.target.id === 'manageRegistrations') {
    manageRegistrations();
  } else if (event.target.id === 'manageDonations') {
    manageDonations();
  }
});
```