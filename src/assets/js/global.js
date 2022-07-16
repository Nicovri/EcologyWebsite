window.onload = function () {
  setActiveToHeaderLink(document.getElementsByClassName(page)[0]);
  setTimeout(function () {
    document.body.style.opacity = "100";
  }, 500);
};

function setActiveToHeaderLink(link) {
  document.getElementsByClassName("active")[0].classList.remove("active");
  link.classList.add("active");
}

let page = window.location.pathname.split("/").pop().split(".")[0];
