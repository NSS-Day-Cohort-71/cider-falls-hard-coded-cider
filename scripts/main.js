import { AreaHTML } from "./areas.js";
import { bannerServices } from "./services.js";
import { Guests } from "./guests.js";

const areasContainer = document.querySelector("#park-area-cards");
const servicesBannerContainer = document.querySelector("#park-services-banner");
const guestContainer = document.querySelector("#guest-list");

areasContainer.innerHTML = AreaHTML();
servicesBannerContainer.innerHTML = bannerServices();
guestContainer.innerHTML = Guests();
