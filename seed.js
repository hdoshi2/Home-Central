const { db, Landlord, Building, Apartment } = require("./server/db");
const { green, red } = require("chalk");

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seedLandlord = [
  {
    company: "Company1",
    phoneNumber: "123-456-7890",
    imageUrl: ""
  },
  {
    company: "Company2",
    phoneNumber: "333-444-5555",
    imageUrl: ""
  },
  {
    company: "Company3",
    phoneNumber: "333-444-5555",
    imageUrl: ""
  }
];

const seedBuilding = [
  {
    buildingName: "Hoyt Street Buiding",
    address: "11 Hoyt Street, Brooklyn, NY 11201",
    imageUrl: "https://cdn-img2.streeteasy.com/nyc/image/66/337427966.jpg",
    landlordId: 1
  },
  {
    buildingName: "388 Bridge Street Buiding",
    address: "388 Bridge Street, Brooklyn, NY 11201",
    imageUrl: "https://cdn-img3.streeteasy.com/nyc/image/99/69353999.jpg",
    landlordId: 2
  },
  {
    buildingName: "City Point",
    address: "88 Willogbuoy Street, Brooklyn, NY 11201",
    imageUrl: "https://cdn-img2.streeteasy.com/nyc/image/22/307048122.jpg",
    landlordId: 3
  },
  {
    buildingName: "Urby Harrison",
    address: "777 South 3rd Street, Harrison, NJ 07029",
    imageUrl: "https://cdn-img3.streeteasy.com/nyc/image/15/283673015.jpg",
    landlordId: 1
  }
];

const seedApartment = [
  {
    unit: "100A",
    bedrooms: 2,
    bathrooms: 1,
    squareFootage: 750,
    occupied: true,
    tenantName: "Brian Smith",
    email: "brian@gmail.com",
    imageUrl: "",
    buildingId: 1
  },
  {
    unit: "200C",
    bedrooms: 4,
    bathrooms: 2,
    squareFootage: 1200,
    occupied: true,
    tenantName: "xx",
    email: "xxx@gmail.com",
    imageUrl: "",
    buildingId: 3
  },
  {
    unit: "500D",
    bedrooms: 4,
    bathrooms: 2,
    squareFootage: randomIntFromInterval(700, 1400),
    occupied: true,
    tenantName: "xx",
    email: "xxx@gmail.com",
    imageUrl: "",
    buildingId: 2
  },
  {
    unit: "1004",
    bedrooms: randomIntFromInterval(1, 4),
    bathrooms: randomIntFromInterval(1, 2),
    squareFootage: randomIntFromInterval(700, 1400),
    occupied: true,
    tenantName: "xx",
    email: "xxx@gmail.com",
    imageUrl: "",
    buildingId: randomIntFromInterval(1, 3)
  },
  {
    unit: "7D",
    bedrooms: randomIntFromInterval(1, 4),
    bathrooms: randomIntFromInterval(1, 2),
    squareFootage: randomIntFromInterval(700, 1400),
    occupied: true,
    tenantName: "xx",
    email: "xxx@gmail.com",
    imageUrl: "",
    buildingId: randomIntFromInterval(1, 3)
  },
  {
    unit: "500C",
    bedrooms: randomIntFromInterval(1, 4),
    bathrooms: randomIntFromInterval(1, 2),
    squareFootage: randomIntFromInterval(700, 1400),
    occupied: true,
    tenantName: "xx",
    email: "xxx@gmail.com",
    imageUrl: "",
    buildingId: randomIntFromInterval(1, 3)
  },
  {
    unit: "90D",
    bedrooms: randomIntFromInterval(1, 4),
    bathrooms: randomIntFromInterval(1, 2),
    squareFootage: randomIntFromInterval(700, 1400),
    occupied: true,
    tenantName: "xx",
    email: "xxx@gmail.com",
    imageUrl: "",
    buildingId: randomIntFromInterval(1, 3)
  }
];

const seed = async () => {
  await db.sync({ force: true });

  await Landlord.create(seedLandlord[0]);
  await Landlord.create(seedLandlord[1]);
  await Landlord.create(seedLandlord[2]);
  await Building.create(seedBuilding[0]);
  await Building.create(seedBuilding[1]);
  await Building.create(seedBuilding[2]);
  await Building.create(seedBuilding[3]);
  await Apartment.create(seedApartment[0]);
  await Apartment.create(seedApartment[1]);
  await Apartment.create(seedApartment[2]);
  await Apartment.create(seedApartment[3]);
  await Apartment.create(seedApartment[4]);
  await Apartment.create(seedApartment[5]);
  await Apartment.create(seedApartment[6]);

  console.log(green("Seeding success!"));
  db.close();
};

seed().catch(err => {
  console.error(red("Oh noes! Something went wrong!"));
  console.error(err);
  db.close();
});
