import { AreaHTML } from "./areas.js";
// import { Guests } from "./guests.js";
// import { Services } from "./services.js"

// reminder:: hard-code header & footer

const mainContainer = document.querySelector("#main-container");

const ApplicationHTML = () => {
  return `
    ${AreaHTML()}
    `;
};
mainContainer.innerHTML = ApplicationHTML();
