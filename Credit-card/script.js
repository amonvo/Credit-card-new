// Get all color elements with class 'color'
const colors = document.querySelectorAll('.color');

// Get the reset button element
const resetBtn = document.querySelector('.reset-btn');

// Get the original background color of the card details container
const originalColor = window.getComputedStyle(document.querySelector('.card-details')).backgroundColor;

// Add event listeners to each color element
colors.forEach(color => {
  color.addEventListener('click', () => {
    // Get the card details container element
    const cardDetails = document.querySelector('.card-details');

    // Change the background color of the card details container to the selected color
    cardDetails.style.backgroundColor = color.style.backgroundColor;
  });
});

// Add an event listener to the reset button
resetBtn.addEventListener('click', () => {
  const cardDetails = document.querySelector('.card-details');
  const nameElement = document.querySelector('.name');

  // Reset barvy karty
  cardDetails.style.backgroundColor = originalColor;

  // Reset jména
  nameElement.textContent = "AmonV";

  // Odstranění fotografie
  const photo = document.querySelector('.user-photo');
  if (photo) {
      photo.remove();
  }
});

// Function to update the cardholder name
function updateName() {
    // Get the input element for the cardholder name
    const nameInput = document.getElementById('name');

    // Get the value entered by the user in the input field
    const name = nameInput.value;

    // Get the element that displays the cardholder name
    const nameElement = document.querySelector('.name');

    // Update the cardholder name with the entered value if it's not empty
    if (name) {
        nameElement.textContent = name;
    }
}

function generateCardNumber() {
  const cardNumberElement = document.querySelector('.number');
  const randomCardNumber = Array.from({ length: 4 }, () => Math.floor(1000 + Math.random() * 9000)).join(' ');
  cardNumberElement.textContent = randomCardNumber;
}

function addPhoto() {
  const photoInput = document.getElementById('photo-input');
  const cardDetails = document.querySelector('.card-details');

  // Kontrola, zda existuje stará fotografie, a její odstranění
  const existingPhoto = document.querySelector('.user-photo');
  if (existingPhoto) {
      existingPhoto.remove();
  }

  // Přidání nové fotografie
  if (photoInput.files && photoInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
          const photo = document.createElement('img');
          photo.src = e.target.result;
          photo.className = 'user-photo';
          cardDetails.appendChild(photo);
      };
      reader.readAsDataURL(photoInput.files[0]);
  }
}


resetBtn.addEventListener('click', () => {
  const cardDetails = document.querySelector('.card-details');
  const nameElement = document.querySelector('.name');

  // Reset barvy karty
  cardDetails.style.backgroundColor = originalColor;

  // Reset jména
  nameElement.textContent = "AmonV";

  // Odstranění fotografie
  const photo = document.querySelector('.user-photo');
  if (photo) {
      photo.remove();
  }
});
