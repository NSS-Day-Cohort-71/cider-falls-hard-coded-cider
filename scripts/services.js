import { getAreas, getParkAreaServices, getServices } from "./database.js";
import { findAreaServices } from "./areas.js";

const areas = getAreas();
const services = getServices();

// click event listener for the bannerServicesContainer
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

// function that returns an HTML string of the services to be invoked in main.js
export const bannerServices = () => {
  let html = "Park Services: ";
  let serviceArray = [];

  for (const service of services) {
    serviceArray.push(
      `<span data-type="banner-service" data-id="${service.id}" data-name="${service.name}"> ${service.name}</span>`
    );
  }

  const serviceList = serviceArray.join();
  html += serviceList;

  return html;
};

// function for creating servicesHTML to be invoked in area.js
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
