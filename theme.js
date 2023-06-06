const toggleButton = document.getElementById('my-theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
  
  // Store the selected theme in local storage
  const selectedTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
  localStorage.setItem('selectedTheme', selectedTheme);
});

// Retrieve the selected theme from local storage
const selectedTheme = localStorage.getItem('selectedTheme');

// Apply the selected theme to the body element on page load
if (selectedTheme) {
  body.classList.add(selectedTheme);
}
function toggleNavbar() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('active');
}