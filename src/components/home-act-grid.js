const griddata = [
  {
    id: 1,
    p: "Spread the word",
    text: "",
  },
  {
    id: 2,
    img: "",
  },
  {
    id: 3,
    icon: "",
    btn: "Spread The Word",
    link: "spread_the_word.html",
  },
  {
    id: 4,
    icon: "",
    btn: "Participate",
    link: "participate.html",
  },
  {
    id: 5,
    p: "Participate",
    text: "",
  },
  {
    id: 6,
    img: "",
  },
  {
    id: 7,
    img: "",
  },
  {
    id: 8,
    icon: "",
    btn: "Gather People",
    link: "gather_people.html",
  },
  {
    id: 9,
    p: "Gather people",
    text: "",
  },
];

const parent = document.getElementById("grid-container-act");
parent.setAttribute(
  "style",
  `
  margin-top: 50px;
  justify-content: space-around;
  align-items: center;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: repeat(auto-fill, auto);
  row-gap: 30px;
  `
);

griddata.map((item) => {
  const div = document.createElement("div");
  div.setAttribute("class", "grid-item-act-" + item.id);
  div.setAttribute("style", `border: 1px solid #000;`);

  if (item.id === 1 || item.id === 5 || item.id === 9) {
    const p1 = document.createElement("p");
    p1.setAttribute("class", "itemTitle");
    const title = document.createTextNode(item.p);
    p1.appendChild(title);

    const p2 = document.createElement("p");
    p2.setAttribute("class", "itemText");
    const text = document.createTextNode(item.text);
    p2.appendChild(text);

    div.appendChild(p1);
    div.appendChild(p2);
  } else if (item.id === 2 || item.id === 6 || item.id === 7) {
    const img = document.createElement("img");
    img.setAttribute("src", item.img);
    img.setAttribute("alt", "item-img");

    div.appendChild(img);
  } else if (item.id === 3 || item.id === 4 || item.id === 8) {
    const icon = document.createElement("img");
    icon.setAttribute("src", item.icon);
    icon.setAttribute("alt", "item-icon");

    const link = document.createElement("a");
    link.setAttribute("href", item.link);
    const text = document.createTextNode(item.btn);
    link.appendChild(text);

    div.appendChild(icon);
    div.appendChild(link);
  }
  parent.appendChild(div);
});
