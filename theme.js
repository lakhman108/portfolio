const toggleButton = document.getElementById('my-theme-toggle');
const body = document.body;
toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-theme');
 
  body.classList.toggle('light-theme');
});