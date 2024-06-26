export const database = {
  guests: [
    { id: 1, firstName: "John", lastName: "Doe", parkAreaId: 2 },
    { id: 2, firstName: "Jane", lastName: "Smith", parkAreaId: 2 },
    { id: 3, firstName: "Alice", lastName: "Johnson", parkAreaId: 3 },
    { id: 4, firstName: "Bob", lastName: "Williams", parkAreaId: 4 },
    { id: 5, firstName: "Charlie", lastName: "Brown", parkAreaId: 5 },
    { id: 6, firstName: "David", lastName: "Jones", parkAreaId: 6 },
    { id: 7, firstName: "Emily", lastName: "Davis", parkAreaId: 2 },
    { id: 8, firstName: "Frank", lastName: "Miller", parkAreaId: 2 },
    { id: 9, firstName: "Grace", lastName: "Wilson", parkAreaId: 3 },
    { id: 10, firstName: "Henry", lastName: "Moore", parkAreaId: 4 },
    { id: 11, firstName: "Ivy", lastName: "Taylor", parkAreaId: 5 },
    { id: 12, firstName: "Jack", lastName: "Anderson", parkAreaId: 5 },
    { id: 13, firstName: "Karen", lastName: "Thomas", parkAreaId: 1 },
    { id: 14, firstName: "Leo", lastName: "Jackson", parkAreaId: 2 },
    { id: 15, firstName: "Mia", lastName: "White", parkAreaId: 3 },
    { id: 16, firstName: "Nora", lastName: "Harris", parkAreaId: 3 },
    { id: 17, firstName: "Owen", lastName: "Martin", parkAreaId: 5 },
    { id: 18, firstName: "Paula", lastName: "Thompson", parkAreaId: 6 },
    { id: 19, firstName: "Quinn", lastName: "Garcia", parkAreaId: 1 },
    { id: 20, firstName: "Rachel", lastName: "Martinez", parkAreaId: 2 },
    { id: 21, firstName: "Sam", lastName: "Robinson", parkAreaId: 3 },
    { id: 22, firstName: "Tina", lastName: "Clark", parkAreaId: 4 },
    { id: 23, firstName: "Uma", lastName: "Rodriguez", parkAreaId: 5 },
    { id: 24, firstName: "Victor", lastName: "Lewis", parkAreaId: 5 },
    { id: 25, firstName: "Wendy", lastName: "Lee", parkAreaId: 1 },
    { id: 26, firstName: "Xander", lastName: "Walker", parkAreaId: 2 },
    { id: 27, firstName: "Yara", lastName: "Hall", parkAreaId: 3 },
    { id: 28, firstName: "Zane", lastName: "Allen", parkAreaId: 4 },
    { id: 29, firstName: "Amy", lastName: "Young", parkAreaId: 5 },
    { id: 30, firstName: "Ben", lastName: "Hernandez", parkAreaId: 6 },
    { id: 31, firstName: "Cathy", lastName: "King", parkAreaId: 1 },
    { id: 32, firstName: "Dan", lastName: "Wright", parkAreaId: 2 },
    { id: 33, firstName: "Eva", lastName: "Lopez", parkAreaId: 3 },
    { id: 34, firstName: "Fred", lastName: "Hill", parkAreaId: 4 },
    { id: 35, firstName: "Gina", lastName: "Scott", parkAreaId: 5 },
    { id: 36, firstName: "Hank", lastName: "Green", parkAreaId: 6 },
    { id: 37, firstName: "Iris", lastName: "Adams", parkAreaId: 3 },
    { id: 38, firstName: "Jake", lastName: "Baker", parkAreaId: 2 },
    { id: 39, firstName: "Kelly", lastName: "Gonzalez", parkAreaId: 3 },
    { id: 40, firstName: "Liam", lastName: "Nelson", parkAreaId: 4 },
    { id: 41, firstName: "Mona", lastName: "Carter", parkAreaId: 5 },
    { id: 42, firstName: "Nick", lastName: "Mitchell", parkAreaId: 6 },
    { id: 43, firstName: "Olive", lastName: "Perez", parkAreaId: 1 },
    { id: 44, firstName: "Pete", lastName: "Roberts", parkAreaId: 2 },
    { id: 45, firstName: "Quincy", lastName: "Turner", parkAreaId: 3 },
    { id: 46, firstName: "Rita", lastName: "Phillips", parkAreaId: 4 },
    { id: 47, firstName: "Steve", lastName: "Campbell", parkAreaId: 4 },
    { id: 48, firstName: "Tara", lastName: "Parker", parkAreaId: 6 },
    { id: 49, firstName: "Ulysses", lastName: "Evans", parkAreaId: 4 },
    { id: 50, firstName: "Vera", lastName: "Edwards", parkAreaId: 2 },
  ],
  areas: [
    { id: 1, name: "Lodge" },
    { id: 2, name: "Lost Wolf Hiking Trail" },
    { id: 3, name: "Chamfort River" },
    { id: 4, name: "Gander River" },
    { id: 5, name: "Campgrounds" },
    { id: 6, name: "Pine Bluff Trails" },
  ],
  services: [
    { id: 1, name: "hiking" },
    { id: 2, name: "canoeing" },
    { id: 3, name: "picnicking" },
    { id: 4, name: "parking" },
    { id: 5, name: "lodging" },
    { id: 6, name: "rock climbing" },
    { id: 7, name: "rafting" },
    { id: 8, name: "fishing" },
    { id: 9, name: "information" },
    { id: 10, name: "zip lines" },
  ],
  parkArea_services: [
    { id: 1, parkAreaId: 1, serviceId: 5 },
    { id: 2, parkAreaId: 1, serviceId: 4 },
    { id: 3, parkAreaId: 1, serviceId: 9 },
    { id: 4, parkAreaId: 1, serviceId: 3 },
    { id: 5, parkAreaId: 2, serviceId: 1 },
    { id: 6, parkAreaId: 2, serviceId: 3 },
    { id: 7, parkAreaId: 2, serviceId: 6 },
    { id: 8, parkAreaId: 3, serviceId: 7 },
    { id: 9, parkAreaId: 3, serviceId: 2 },
    { id: 10, parkAreaId: 3, serviceId: 8 },
    { id: 11, parkAreaId: 4, serviceId: 8 },
    { id: 12, parkAreaId: 4, serviceId: 1 },
    { id: 13, parkAreaId: 5, serviceId: 5 },
    { id: 14, parkAreaId: 5, serviceId: 9 },
    { id: 15, parkAreaId: 5, serviceId: 4 },
    { id: 16, parkAreaId: 6, serviceId: 1 },
    { id: 17, parkAreaId: 6, serviceId: 3 },
    { id: 18, parkAreaId: 6, serviceId: 10 },
  ],
};

// create a getFunction using the .map method for guests
export const getGuests = () => {
  return database.guests.map((guest) => ({ ...guest }));
};

// create a getFunction using the .map method for areas
export const getAreas = () => {
  return database.areas.map((area) => ({ ...area }));
};

// create a getFunction using the .map method for services
export const getServices = () => {
  return database.services.map((service) => ({ ...service }));
};

// create a getFunction using the .map method for parkArea_services
export const getParkAreaServices = () => {
  return database.parkArea_services.map((parkArea_service) => ({
    ...parkArea_service,
  }));
};
