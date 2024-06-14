import { getGuests } from "./database.js";

const guests = getGuests();

// function for creating guestsHTML to be invoked in main.js
export const Guests = () => {
  let guestsHTML = `<ul>`;

  for (const guest of guests) {
    guestsHTML += `<li
                data-type="guest"
                data-id="${guest.id}"
                data-area-id="${guest.parkAreaId}"
                data-first-name="${guest.firstName}"
                data-last-name="${guest.lastName}"
            >${guest.firstName} ${guest.lastName}</li>`;
  }

  guestsHTML += `</ul>`;

  return guestsHTML;
};
