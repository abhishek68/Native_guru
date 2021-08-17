$(window).on("load", function () {
  setTimeout(() => {
    $(".loader-wrapper").fadeOut("slow");
  }, 2000);
});

var mybutton = document.getElementById("scrollBtn");

window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

particlesJS.load('particles-js', 'js/particles.json', function () {
  console.log('callback - particles.js config loaded');
});



