// import the getServices from Database
import { getAreas, getParkAreaServices, getServices } from "./database.js";
import { findAreaServices } from "./areas.js";

const areas = getAreas();
const parkAreaServices = getParkAreaServices();
const services = getServices();

// create click event listener for the bannerServicesContainer
document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.dataset.type === "banner-service") {
    const clickedName = clickEvent.target.dataset.name;
    let currentAreasWithClickedService = [];
    let areaServicesHTMLString = "";

    for (const area of areas) {
      const areaServices = findAreaServices(
        area,
        getParkAreaServices(),
        services
      );

      if (areaServices.includes(clickedName)) {
        currentAreasWithClickedService.push(area.name);
      }
    }

    areaServicesHTMLString += currentAreasWithClickedService.join(", ");

    window.alert(`${clickedName} is available in ${areaServicesHTMLString}`);
  }
});

// create function that returns an HTML string of the services
export const bannerServices = () => {
  let html = "Park Services: ";
  let serviceArray = [];

  for (const service of services) {
    serviceArray.push(
      `<span data-type="banner-service" data-id=${service.id} data-name=${service.name}> ${service.name}</span>`
    );
  }

  const serviceList = serviceArray.join();
  html += serviceList;

  return html;
};

// create an export function for creating servicesHTML
export const Services = () => {
  let html = `<article class="services">`;

  for (const service of services) {
    html += `
    <ul>
        <li data-type="service" 
        data-id=${service.id}
        data-name=${service.name} >
        ${service.name}
        </li>
    </ul>
    `;
  }

  html += "</article>";

  return html;
};
