const VehicleModule = require('./vehicle').Vehicle
const cast = require('./passengerClass.js').Passenger

class ChittyChitty extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.canFly = false;
        this.maxPassengers = 4;
        this.canFloat = false;


    }

}

//Passengers of Chitty Chitty Bang Bang
//I know there has to be a better way to push these things into an array,
//but this is what I'm doing for now
// let mrPotts = new PassPeople('Caractacus Potts',30, 'male')
// let truly = new PassPeople('Truly Scrumptious',26,'female')
// let boyPotts = new PassPeople('Jeremy Potts',10, 'male')
// let girlPotts = new PassPeople('Jemima Potts',8,'female')
// cast.push(mrPotts,truly,)
// console.log(cast)