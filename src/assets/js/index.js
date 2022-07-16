var improve1 = document.getElementsByClassName("grid-item-improve-1");
var improve2 = document.getElementsByClassName("grid-item-improve-2");
var improve3 = document.getElementsByClassName("grid-item-improve-3");

var gridItemText = document.getElementsByClassName("grid-item-act-text");

// Change the style of improve1 depending of if its visible on the screen or not (on scroll down only)
// Slow down the page a bit (try to see a better solution)
// When a right side element is hovered, the video behind becomes a bit visible again
window.addEventListener("scroll", function () {
  if (improve1[0].getBoundingClientRect().top < window.innerHeight) {
    improve1[0].classList.add("slide-to-right");
    setTimeout(function () {
      improve1[0].classList.add("hover");
    }, 1500);
  } else {
    improve1[0].classList.remove("slide-to-right");
    improve1[0].classList.remove("hover");
  }

  if (improve2[0].getBoundingClientRect().top < window.innerHeight) {
    improve2[0].classList.add("slide-to-left");
    setTimeout(function () {
      improve2[0].classList.add("hover");
    }, 1500);
  } else {
    improve2[0].classList.remove("slide-to-left");
    improve2[0].classList.remove("hover");
  }

  if (improve3[0].getBoundingClientRect().top < window.innerHeight) {
    improve3[0].classList.add("slide-up");
    setTimeout(function () {
      improve3[0].classList.add("hover");
    }, 1500);
  } else {
    improve3[0].classList.remove("slide-up");
    improve3[0].classList.remove("hover");
  }

  if (gridItemText[0].getBoundingClientRect().top < window.innerHeight) {
    gridItemText[0].classList.add("slide-to-right");
    setTimeout(function () {
      gridItemText[0].classList.add("hover");
    }, 1500);
  } else {
    gridItemText[0].classList.remove("slide-to-right");
    gridItemText[0].classList.remove("hover");
  }

  if (gridItemText[1].getBoundingClientRect().top < window.innerHeight) {
    gridItemText[1].classList.add("slide-up");
    setTimeout(function () {
      gridItemText[1].classList.add("hover");
    }, 1500);
  } else {
    gridItemText[1].classList.remove("slide-up");
    gridItemText[1].classList.remove("hover");
  }

  if (gridItemText[2].getBoundingClientRect().top < window.innerHeight) {
    gridItemText[2].classList.add("slide-to-left");
    setTimeout(function () {
      gridItemText[2].classList.add("hover");
    }, 1500);
  } else {
    gridItemText[2].classList.remove("slide-to-left");
    gridItemText[2].classList.remove("hover");
  }
});
