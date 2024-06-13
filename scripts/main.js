import { Areas } from "./areas.js";
import { Services } from "./services.js";
import { Guests } from "./guests.js";

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
