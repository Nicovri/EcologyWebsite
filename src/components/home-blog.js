var ajax = new XMLHttpRequest();
ajax.open("GET", "../components/home-blog.html", false);
ajax.send();
document.getElementById("home-blog").innerHTML += ajax.responseText;
