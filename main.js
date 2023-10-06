// Importing dependencies
import { registerUser, loginUser, searchChurches, bookService, registerEvent, makeDonation, manageListings, manageBookings, manageRegistrations, manageDonations } from './user_profile.js';

// DOM Elements
const searchBar = document.getElementById('searchBar');
const registrationForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const userProfile = document.getElementById('userProfile');
const churchListing = document.getElementById('churchListing');
const serviceBookingForm = document.getElementById('serviceBookingForm');
const eventRegistrationForm = document.getElementById('eventRegistrationForm');
const donationForm = document.getElementById('donationForm');
const adminDashboard = document.getElementById('adminDashboard');

// Event Listeners
searchBar.addEventListener('submit', searchChurches);
registrationForm.addEventListener('submit', registerUser);
loginForm.addEventListener('submit', loginUser);
serviceBookingForm.addEventListener('submit', bookService);
eventRegistrationForm.addEventListener('submit', registerEvent);
donationForm.addEventListener('submit', makeDonation);

// Admin Dashboard
if (adminDashboard) {
  adminDashboard.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'manageListings') {
      manageListings();
    } else if (event.target.dataset.action === 'manageBookings') {
      manageBookings();
    } else if (event.target.dataset.action === 'manageRegistrations') {
      manageRegistrations();
    } else if (event.target.dataset.action === 'manageDonations') {
      manageDonations();
    }
  });
}

// User Profile
if (userProfile) {
  userProfile.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'editProfile') {
      // Code to edit user profile
    } else if (event.target.dataset.action === 'deleteProfile') {
      // Code to delete user profile
    }
  });
}

// Church Listing
if (churchListing) {
  churchListing.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'favorite') {
      // Code to favorite a church
    }
  });
}