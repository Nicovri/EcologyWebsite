var ajax = new XMLHttpRequest();
ajax.open("GET", "../components/contact-form.html", false);
ajax.send();
document.getElementById("contact-form").innerHTML += ajax.responseText;

// Let the page refresh, but show a custom alert dialog on the new loaded page
function sendEmail(e) {
  alert(e.firstName.value);
  e.preventDefault();
  return false;
}

// const input = document.getElementById("tel");
// window.intlTelInput(input, {
//   initialCountry: "auto",
//   utilsScript:
//     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
// });
