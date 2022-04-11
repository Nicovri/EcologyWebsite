const gridData = [
  {
    id: 1,
    p: "Spread the word",
    text: "Better together! Share your story with others and help our planet",
  },
  {
    id: 2,
    img: "",
  },
  {
    id: 3,
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#523909" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>`,
    btn: "Spread The Word",
    link: "spread_the_word.html",
  },
  {
    id: 4,
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#523909" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>`,
    btn: "Participate",
    link: "participate.html",
  },
  {
    id: 5,
    p: "Participate",
    text: "By acting in your everyday life, you can make a huge change on our lives",
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
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#523909" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>`,
    btn: "Gather People",
    link: "gather_people.html",
  },
  {
    id: 9,
    p: "Gather people",
    text: "Demonstrate and make people understand that this is our only chance",
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

gridData.map((item) => {
  const div = document.createElement("div");
  div.classList.add("grid-item-act-" + item.id);
  div.setAttribute(
    "style",
    `border: 1px solid #000; display: flex; flex-direction: column;`
  );

  if (item.id === 1 || item.id === 5 || item.id === 9) {
    const p1 = document.createElement("p");
    p1.classList.add("itemTitle");
    const title = document.createTextNode(item.p);
    p1.appendChild(title);

    const p2 = document.createElement("p");
    p2.classList.add("itemText");
    const text = document.createTextNode(item.text);
    p2.appendChild(text);

    div.appendChild(p1);
    div.appendChild(p2);
  }
  if (item.id === 2 || item.id === 6 || item.id === 7) {
    const img = document.createElement("img");
    img.setAttribute("src", item.img);
    img.setAttribute("alt", "item-img");

    div.appendChild(img);
  }
  if (item.id === 3 || item.id === 4 || item.id === 8) {
    const icon = document.createElement("img");
    let blob = new Blob([item.icon], { type: "image/svg+xml" });
    let url = URL.createObjectURL(blob);
    icon.setAttribute("src", url);
    icon.setAttribute("alt", "item-icon");
    icon.classList.add("itemIcon");
    icon.width = "100";
    // icon.classList.add("img-fluid");

    const newLine = document.createElement("br");

    const link = document.createElement("a");
    link.setAttribute("href", item.link);
    link.classList.add("btn-round");
    link.setAttribute("style", "align-self: center;");
    const text = document.createTextNode(item.btn);
    link.appendChild(text);

    div.appendChild(icon);
    div.appendChild(newLine);
    div.appendChild(link);
  }
  parent.appendChild(div);
});
