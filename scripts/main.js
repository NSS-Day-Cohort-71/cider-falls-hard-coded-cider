import { AreaHTML } from "./areas.js";
import { bannerServices, Services } from "./services.js";
import { Guests } from "./guests.js";

// reminder:: hard-code header & footer

const areasContainer = document.querySelector("#park-area-cards");
const servicesBannerContainer = document.querySelector("#park-services-banner");
const guestContainer = document.querySelector("#guest-list");
const servicesContainer = document.querySelector(".services-offered");

areasContainer.innerHTML = AreaHTML();
servicesBannerContainer.innerHTML = bannerServices();
guestContainer.innerHTML = Guests();

// render services to the areas articles
servicesContainer.innerHTML = Services();
