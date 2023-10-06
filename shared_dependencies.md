Shared Dependencies:

1. **Exported Variables**: 
   - `userDetails`: Object containing user's first name, last name, email, password, and saved churches.
   - `churchListings`: Array of objects containing church details.
   - `bookings`: Array of objects containing booking details.
   - `events`: Array of objects containing event details.
   - `donations`: Array of objects containing donation details.

2. **Data Schemas**: 
   - `User`: Contains fields for first name, last name, email, password, and saved churches.
   - `Church`: Contains fields for location, denomination, amenities, descriptions, images, contact info.
   - `Booking`: Contains fields for date, time, service type, special instructions, payment method.
   - `Event`: Contains fields for event details, ticket quantity/type, attendee details, payment form.
   - `Donation`: Contains fields for donation amount, donation type (one-time or recurring), payment method.

3. **ID Names of DOM Elements**: 
   - `searchBar`: Search bar element.
   - `registrationForm`: Registration form element.
   - `loginForm`: Login form element.
   - `userProfile`: User profile element.
   - `churchListing`: Church listing element.
   - `serviceBookingForm`: Service booking form element.
   - `eventRegistrationForm`: Event registration form element.
   - `donationForm`: Donation form element.
   - `adminDashboard`: Admin dashboard element.

4. **Message Names**: 
   - `registrationSuccess`: Message displayed on successful registration.
   - `loginSuccess`: Message displayed on successful login.
   - `bookingConfirmation`: Message displayed on successful booking.
   - `eventRegistrationConfirmation`: Message displayed on successful event registration.
   - `donationConfirmation`: Message displayed on successful donation.

5. **Function Names**: 
   - `registerUser()`: Function to register a new user.
   - `loginUser()`: Function to login a user.
   - `searchChurches()`: Function to search churches.
   - `bookService()`: Function to book a service.
   - `registerEvent()`: Function to register for an event.
   - `makeDonation()`: Function to make a donation.
   - `manageListings()`: Function for church staff to manage listings.
   - `manageBookings()`: Function for church staff to manage bookings.
   - `manageRegistrations()`: Function for church staff to manage event registrations.
   - `manageDonations()`: Function for church staff to manage donations.