// import the getFunctions from Database
import { getAreas, getParkAreaServices } from "./database.js";
// reminder for later: click events -- not now

// invoke getFunction
const areas = getAreas();
const parkAreaServices = getParkAreaServices();
// create an export function for creating AreaHTML
export const AreaHTML = () => {
  let AreaHTML = "<article>";
  // invoke iterate through the array of objects
  for (const area of areas) {
    // create html portion
    AreaHTML += `
    <h2>${area.name}</h2>
    <div class="services-offered">
    </div>
    `;
  }

  AreaHTML += "</article>";
  // return html
  return AreaHTML;
};

const findAreaServices = (area, parkAreaServices) => {
  let currentServices = {};

  for (const service of parkAreaServices) {
    if (service.parkAreaId === area.parkAreaId) {
      currentServices = service;
    }
  }

  return currentServices;
};
