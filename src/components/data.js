import paris from "../images/bg_paris.webp"
import bangkok from "../images/Bangkok.webp"
import Southafrica from "../images/South_africa.jpeg"
import Australia from "../images/australia.jpeg"
import mexico from "../images/Mexico.jpeg"


let Data = [
  {
    id: 0,
    title: "Paris",
    location: "France",
    googleMaplink: "https://www.google.com/maps/dir//eiffel+tower/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0?sa=X&ved=2ahUKEwiVstuQt9X6AhWdR_EDHWf8A0UQ9Rd6BQiPARAF",
    startDate: "21, March, 2023",
    endDate: "3. April, 2023",
    description: `Paris is one of the most beautiful cities in the world.
     It is known worldwide for the Louvre Museum, Notre-Dame cathedral, and
      the Eiffel tower. It has a reputation of being a romantic and cultural city.`,
    image: paris,
  },
  {
      id: 1,
      title: "Bangkok",
      location: "Thailand",
      googleMaplink: "https://www.google.com/maps/place/Bangkok,+Thailand/@13.7251088,100.3529077,10z/data=!3m1!4b1!4m5!3m4!1s0x311d6032280d61f3:0x10100b25de24820!8m2!3d13.7563309!4d100.5017651?hl=en",
      startDate:"1, June, 2024",
      endDate:"21, September, 2024",
      description: `Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life.
       The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district,
        home to opulent Grand Palace and its sacred Wat Phra Kaew Temple`,
      image: bangkok,
  } ,
  {
      id: 2,
      title: "Cape Town",
      location: "South Africa",
      googleMaplink: "https://www.google.com/maps/place/Cape+Town,+South+Africa/@-33.9131287,18.0955925,9z/data=!3m1!4b1!4m5!3m4!1s0x1dcc500f8826eed7:0x687fe1fc2828aa87!8m2!3d-33.9248685!4d18.4240553?hl=en",
      startDate:"12, December, 2024",
      endDate:"26, Febuary, 2026",
      description: `Cape Town is a port city on South Africa’s southwest coast, 
      on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain’s flat top,
       from which there are sweeping views of the city, the busy harbor and boats heading for Robben Island,`,
     image: Southafrica
  } ,
  {
      id: 3,
      title: "Sydney",
      location: "Australia",
      googleMaplink: "https://www.google.com/maps/place/Sydney+NSW,+Australia/@-33.8473567,150.6517824,10z/data=!3m1!4b1!4m5!3m4!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955?hl=en",
      startDate:"15, March, 2025",
      endDate:"30, March, 2025",
      description: `Sydney, capital of New South Wales and one of Australia's largest cities,
       is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design.
        Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life,
         with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby.`,
      image: Australia
  }
  ,
  {
      id: 4,
      title: "Cancun",
      location: "Mexico",
      googleMaplink: "https://www.google.com/maps/place/Canc%C3%BAn,+Quintana+Roo,+Mexico/@21.1214886,-86.9192743,12z/data=!4m5!3m4!1s0x8f4c2b05aef653db:0xce32b73c625fcd8a!8m2!3d21.161908!4d-86.8515279?hl=en",
      startDate:"21, September, 2025",
      endDate:"Infintity",
      description: `
      Cancún, a Mexican city on the Yucatán Peninsula bordering the Caribbean Sea, is known for its beaches, 
      numerous resorts and nightlife. It’s composed of 2 distinct areas: the more traditional downtown area, El Centro, and Zona Hotelera, a long, beachfront strip of high-rise hotels, nightclubs, shops and restaurants.`,
      image: mexico
  }

]


export default Data


/*
 ,
   {
       id:,
       title: "",
       location: "",
       googleMaplink: "",
       startDate:"",
       endDate:"",
       description: ``,
       image: "../images/"
   }
   */