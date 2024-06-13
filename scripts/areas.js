// import the getFunctions from Database
import { getAreas } from "./database.js";
// reminder for later: click events -- not now

// invoke getFunction
const areas = getAreas();
// create an export function for creating AreaHTML
export const AreaHTML = () => {
  let AreaHTML = "<article>";
  // invoke iterate through the array of objects
  for (const area of areas) {
    // create html portion
    AreaHTML += `
    <h2>
    ${area.name}
    <div id="services-offered">
    </div>
    </h2>
    `;
  }

  AreaHTML += "</article>";
  // return html
  return AreaHTML;
};
