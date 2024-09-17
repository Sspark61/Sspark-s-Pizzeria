import "../styles/header.css";
import "../styles/home.css";
import "../styles/contact.css";
import "../styles/menu.css";
import createhomepage from "../pages/home";
import createmenupage from "../pages/menu";
import createcontactpage from "../pages/contact";

let home = document.getElementById("home");
let menu = document.getElementById("menu");
let about = document.getElementById("about");
createhomepage();

home.addEventListener("click", () => {
  clearpage();
  createhomepage();
});

menu.addEventListener("click", () => {
  clearpage();
  createmenupage();
});

about.addEventListener("click", () => {
  clearpage();
  createcontactpage();
});

function clearpage() {
  let container = document.getElementById("container");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
}
