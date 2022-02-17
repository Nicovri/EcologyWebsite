var ajax = new XMLHttpRequest();
ajax.open("GET", "../components/menu-footer.html", false);
ajax.send();
document.getElementById("menu-footer").innerHTML += ajax.responseText;
