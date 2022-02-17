var ajax = new XMLHttpRequest();
ajax.open("GET", "../components/menu-header.html", false);
ajax.send();
document.getElementById("menu-header").innerHTML += ajax.responseText;
