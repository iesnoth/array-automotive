const VehicleModule = require('./vehicle').Vehicle
const PassPeople = require('./passengerClass').Passenger

class ChittyChitty extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.canFly = false;
        this.maxPassengers = 4;
        this.canFloat = false;

    }

}

//Passengers of Chitty Chitty Bang Bang
let mike = new PassPeople('Mike',32, 'male')
console.log(mike)