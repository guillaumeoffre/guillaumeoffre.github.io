let buttonUp = document.getElementById("button-up");

// When the user scrolls down 82px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 82 || document.documentElement.scrollTop > 82) {
    buttonUp.style.display = "block";
  } else {
    buttonUp.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
