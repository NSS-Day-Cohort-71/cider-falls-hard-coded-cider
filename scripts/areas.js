import {
  getAreas,
  getParkAreaServices,
  getServices,
  getGuests,
} from "./database.js";

// invoke getFunctions
const areas = getAreas();
const allServices = getServices();
const parkAreaServices = getParkAreaServices();
const guests = getGuests();

// function to find services for a specific area
export const findAreaServices = (area, parkAreaServices, allServices) => {
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

// function for creating AreaHTML
export const AreaHTML = () => {
  let AreaHTML = "";
  
  // iterate through the array of areas
  for (const area of areas) {
    const services = findAreaServices(area, parkAreaServices, allServices);

    AreaHTML += `
    <section class="area-card" >
      <h2 class="area-header" data-type="area-title" data-area-id=${area.id}>${area.name}</h2>
      <div class="services-offered">
        ${services.map((service) => `<p>${service}</p>`).join("")}
      </div>
    </section>
    </section>
    `;
  }

  // AreaHTML += "</article>";
  // return html
  return AreaHTML;
};

document.addEventListener("click", (e) => {
  const clicked = e.target;
  if (clicked.dataset.type === "area-title") {
    const areaId = parseInt(clicked.dataset.areaId);
    let guestCount = 0;
    for (const guest of guests) {
      if (guest.parkAreaId === areaId) {
        guestCount++;
      }
    }
    alert(`There are ${guestCount} guests at this area`);
  }
});
