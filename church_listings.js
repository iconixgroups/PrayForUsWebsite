```javascript
// Array of church listings
let churchListings = [];

// Function to fetch church listings from the database
function fetchChurchListings() {
    // Fetching data from the database (placeholder URL)
    fetch('https://api.churchlistings.com')
        .then(response => response.json())
        .then(data => {
            churchListings = data;
            displayChurchListings();
        })
        .catch(error => console.error('Error:', error));
}

// Function to display church listings on the page
function displayChurchListings() {
    const churchListingElement = document.getElementById('churchListing');
    churchListingElement.innerHTML = '';

    churchListings.forEach(church => {
        const churchCard = document.createElement('div');
        churchCard.className = 'church-card';

        const churchName = document.createElement('h2');
        churchName.textContent = church.name;
        churchCard.appendChild(churchName);

        const churchLocation = document.createElement('p');
        churchLocation.textContent = `Location: ${church.location}`;
        churchCard.appendChild(churchLocation);

        const churchDenomination = document.createElement('p');
        churchDenomination.textContent = `Denomination: ${church.denomination}`;
        churchCard.appendChild(churchDenomination);

        const churchAmenities = document.createElement('p');
        churchAmenities.textContent = `Amenities: ${church.amenities.join(', ')}`;
        churchCard.appendChild(churchAmenities);

        const churchDescription = document.createElement('p');
        churchDescription.textContent = church.description;
        churchCard.appendChild(churchDescription);

        const churchContact = document.createElement('p');
        churchContact.textContent = `Contact: ${church.contact}`;
        churchCard.appendChild(churchContact);

        const bookButton = document.createElement('button');
        bookButton.textContent = 'Book Service';
        bookButton.onclick = () => bookService(church.id);
        churchCard.appendChild(bookButton);

        const registerButton = document.createElement('button');
        registerButton.textContent = 'Register for Event';
        registerButton.onclick = () => registerEvent(church.id);
        churchCard.appendChild(registerButton);

        const donateButton = document.createElement('button');
        donateButton.textContent = 'Donate';
        donateButton.onclick = () => makeDonation(church.id);
        churchCard.appendChild(donateButton);

        churchListingElement.appendChild(churchCard);
    });
}

// Call the fetch function when the page loads
fetchChurchListings();
```