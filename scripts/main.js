import { Areas } from "./areas.js";
import { Services } from "./areas.js";
import { Guests } from "./areas.js";

// reminder:: hard-code header & footer

const mainContainer = document.querySelector("#main-container");

const ApplicationHTML = () => {
  return `
    ${Areas()}
    ${Services()}
    ${Guests()}
    `;
};
mainContainer.innerHTML = ApplicationHTML();
