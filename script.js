var typed = new Typed(".multiple-text", {
    strings: ["Software Engineer", "Video Editor", "Web Designer","Programmer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

const toggleButton = document.getElementById('my-theme-toggle');
const body = document.body;
toggleButton.addEventListener('click', function() {
  body.classList.toggle('dark-theme');
 
  body.classList.toggle('light-theme');
});