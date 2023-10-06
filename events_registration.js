```javascript
// Get the event registration form
const eventRegistrationForm = document.getElementById('eventRegistrationForm');

// Function to register for an event
function registerEvent(event) {
    event.preventDefault();

    // Get form data
    let eventDetails = eventRegistrationForm['eventDetails'].value;
    let ticketQuantity = eventRegistrationForm['ticketQuantity'].value;
    let ticketType = eventRegistrationForm['ticketType'].value;
    let attendeeDetails = eventRegistrationForm['attendeeDetails'].value;
    let paymentMethod = eventRegistrationForm['paymentMethod'].value;

    // Create event registration object
    let eventRegistration = {
        eventDetails: eventDetails,
        ticketQuantity: ticketQuantity,
        ticketType: ticketType,
        attendeeDetails: attendeeDetails,
        paymentMethod: paymentMethod
    };

    // Add event registration to events array
    events.push(eventRegistration);

    // Send confirmation email
    sendConfirmationEmail(eventRegistration);

    // Display success message
    displayMessage('eventRegistrationConfirmation');
}

// Function to send confirmation email
function sendConfirmationEmail(eventRegistration) {
    // Email content
    let emailContent = `You have successfully registered for the event: ${eventRegistration.eventDetails}. 
                        Ticket Quantity: ${eventRegistration.ticketQuantity}. 
                        Ticket Type: ${eventRegistration.ticketType}. 
                        Attendee Details: ${eventRegistration.attendeeDetails}.`;

    // Send email
    // This is a placeholder. In a real application, you would use an email API.
    console.log(`Sending email: ${emailContent}`);
}

// Function to display message
function displayMessage(messageName) {
    // Get message element
    let messageElement = document.getElementById(messageName);

    // Display message
    messageElement.style.display = 'block';
}

// Event listener for event registration form submission
eventRegistrationForm.addEventListener('submit', registerEvent);
```