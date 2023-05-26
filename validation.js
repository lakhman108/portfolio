// form-validation.js

// Get the form element
var form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  // Prevent the form from being submitted
  event.preventDefault();
  
  // Perform form validation
  var isValid = validateForm();
  
  // If form is valid, submit the form
  if (isValid) {
    form.submit();
  }
});

// Function to validate the form
function validateForm() {
  // Get form input values
  var name = document.getElementById('fname').value;
  var gender = document.querySelector('input[name="gender"]:checked');
  var number = document.getElementById('number').value;
  var email = document.getElementById('email').value;
  var feedback = document.getElementById('feedback').value;
  var rating = document.querySelector('input[name="rating"]:checked');
  
  // Perform validation for each field
  var isValid = true;
  
  if (name === '') {
    isValid = false;
    alert('Please enter your name.');
  }
  
  if (!gender) {
    isValid = false;
    alert('Please select your gender.');
  }
  
  if (number === '') {
    isValid = false;
    alert('Please enter your mobile number.');
  } else if (number.length !== 10) {
    isValid = false;
    alert('Please enter a valid 10-digit mobile number.');
  }
  
  if (email === '') {
    isValid = false;
    alert('Please enter your email.');
  } else if (!validateEmail(email)) {
    isValid = false;
    alert('Please enter a valid email address.');
  }
  
  if (feedback === '') {
    isValid = false;
    alert('Please provide your feedback.');
  }
  
  if (!rating) {
    isValid = false;
    alert('Please rate us.');
  }
  
  return isValid;
}

// Function to validate email address using regular expression
function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
