```javascript
// User Profile JavaScript

// User details object
let userDetails = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  savedChurches: []
};

// DOM Elements
const userProfile = document.getElementById('userProfile');

// Function to display user details
function displayUserDetails() {
  userProfile.innerHTML = `
    <h2>${userDetails.firstName} ${userDetails.lastName}</h2>
    <p>Email: ${userDetails.email}</p>
    <p>Password: ${'*'.repeat(userDetails.password.length)}</p>
    <h3>Saved Churches</h3>
    <ul>
      ${userDetails.savedChurches.map(church => `<li>${church}</li>`).join('')}
    </ul>
  `;
}

// Function to edit user details
function editUserDetails(newDetails) {
  userDetails = { ...userDetails, ...newDetails };
  displayUserDetails();
}

// Function to add a church to saved churches
function addSavedChurch(church) {
  userDetails.savedChurches.push(church);
  displayUserDetails();
}

// Function to remove a church from saved churches
function removeSavedChurch(church) {
  const index = userDetails.savedChurches.indexOf(church);
  if (index > -1) {
    userDetails.savedChurches.splice(index, 1);
  }
  displayUserDetails();
}

// Initial display of user details
displayUserDetails();
```