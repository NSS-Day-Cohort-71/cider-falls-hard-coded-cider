// import the getFunctions from Database
import { getAreas, getParkAreaServices, getServices } from "./database.js";
// reminder for later: click events -- not now

// invoke getFunctions
const areas = getAreas();
const allServices = getServices();
const parkAreaServices = getParkAreaServices();

// create a function to find services for a specific area
const findAreaServices = (area, parkAreaServices, allServices) => {
  let serviceIds = [];
  let currentServices = [];

  for (const service of parkAreaServices) {
    if (service.parkAreaId === area.id) {
      serviceIds.push(service.serviceId);
    }
  }

  for (const serviceId of serviceIds) {
    for (const service of allServices) {
      if (service.id === serviceId) {
        currentServices.push(service.name);
      }
    }
  }

  return currentServices;
};

// create an export function for creating AreaHTML
export const AreaHTML = () => {
  let AreaHTML = "<article>";

  // iterate through the array of areas
  for (const area of areas) {
    const services = findAreaServices(area, parkAreaServices, allServices);

    AreaHTML += `
      <h2>${area.name}</h2>
      <div class="services-offered">
        ${services.map((service) => `<p>${service}</p>`).join("")}
      </div>
    `;
  }

  AreaHTML += "</article>";
  // return html
  return AreaHTML;
};
