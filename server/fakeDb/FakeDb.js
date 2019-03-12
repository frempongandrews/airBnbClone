const Rental = require("../models/Rental");

function FakeDb () {

    this.rentals = [
        {
        title: "Nice view on ocean",
        city: "San Francisco",
        street: "Main street",
        category: "condo",
        image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
        bedrooms: 4,
        shared: true,
        description: "Very nice apartment in center of the city.",
        dailyRate: 43
        },
        {
            title: "Modern apartment in center",
            city: "New York",
            street: "Time Square",
            category: "apartment",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 1,
            shared: false,
            description: "Very nice apartment in center of the city.",
            dailyRate: 11
        },
        {
            title: "Old house in nature",
            city: "Spisska Nova Ves",
            street: "Banicka 1",
            category: "house",
            image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
            bedrooms: 5,
            shared: true,
            description: "Very nice apartment in center of the city.",
            dailyRate: 23
        }
    ];

   this.fillDb = function () {

       let savedRentals = [];

       this.rentals.forEach((rental, i) => {
           let newRental = new Rental(rental);
           newRental.save()
           .then(savedRental => {
               savedRentals = savedRentals.concat(savedRental);


               //log on last saved
               if (i === 2) {
                   //console.log(`Saved rentals`, savedRentals);
                   console.log(`Db successfully FILLED`);
               }

           })
           .catch(err => {
               console.log(`Error while saving rental: ${err.message}`);
           })
       })
    };

    this.clearDb = async function () {
        await Rental.deleteMany({})
        .then(() => {
            console.log(`Db successfully CLEARED`)
        })
        .catch(err => {
            console.log(`Error while clearing Db: ${err.message}`);
        })
    }

}

module.exports = FakeDb;