"use strict";

const mainContent = document.getElementById("home");
const aboutPage = document.getElementById("about-section");

function aboutPageToggle() {
  mainContent.style.display = "none";

  aboutPage.style.display = "block";
}

function homePageActivate() {
  mainContent.style.display = "block";

  aboutPage.style.display = "none";
}
