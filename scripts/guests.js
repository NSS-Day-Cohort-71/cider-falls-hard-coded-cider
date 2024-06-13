// import the getFunctions from Database
import { getGuests } from './database.js'

const guests = getGuests()

export const GuestsList = () => {
    let guestsHTML = `<ul>`

    for (const guest of guests) {
        guestsHTML += `<li
                data-type="guest"
                data-id="${guest.firstName}"
                data-area-id="${guest.parkAreaId}"
                data-first-name="${guest.firstName}"
                data-last-name="${guest.lastName}"
            >${guest.firstName} ${guest.lastName}</li>`
    }

    guestsHTML += `</ul>`

    return guestsHTML
}