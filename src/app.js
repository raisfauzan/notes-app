import "./styles/style.css";
import "./styles/responsive.css";

import "./script/components/index.js";

import home from "../src/script/views/home.js";

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader-hidden");

  home();
});
