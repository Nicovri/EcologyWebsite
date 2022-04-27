window.onload = function () {
  setTimeout(function () {
    document.body.style.opacity = "100";
  }, 500);
};

var improve1 = document.getElementsByClassName("grid-item-improve-1");

// Change the style of improve1 depending of if its visible on the screen or not (on scroll down only)
// On scroll back up, make the animations reverse??
window.addEventListener("scroll", function () {
  if (improve1[0].getBoundingClientRect().top < window.innerHeight) {
    improve1[0].style.backgroundColor = "red";
    improve1[0].style.transition = "1s";
  }
});
window.addEventListener("scroll", function () {
  if (improve1[0].getBoundingClientRect().top > window.innerHeight) {
    improve1[0].style.backgroundColor = "white";
  }
});
