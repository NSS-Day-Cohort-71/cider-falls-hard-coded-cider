// import the getServices from Database
import { getServices } from "./database.js";

// reminder for later: click events -- not now

// invoke getFunction and set it to a variable
const services = getServices();

// create function that returns an HTML string of the services
export const bannerServices = () => {
  let html = "Park Services: ";

  for (const service of services) {
    html += `, ${service.name}`;
  }

  return html;
};

// create an export function for creating servicesHTML
export const Services = () => {
  let html = `<article class="services">`;

  // iterate through the array of services
  for (const service of services) {
    html += `
    <ul>
        <li data-type="service" 
        data-id=${service.id} >
        ${service.name}
        </li>
    </ul>
    `;
  }

  html += "</article>";

  return html;
};

// create function to renderToDOM
