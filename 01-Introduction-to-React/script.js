//  # creating a div using Js

const cont2 = document.getElementById("cont2");

const h1 = document.createElement("h1");
h1.innerText = "React Dev";
const h2 = document.createElement("h2");
h2.innerText = "Upendhar N";

const outerDiv = document.createElement("div");
outerDiv.appendChild(h1);
outerDiv.appendChild(h2);

cont2.appendChild(outerDiv);
