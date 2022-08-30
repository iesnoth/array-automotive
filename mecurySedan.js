//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        this.availableRoom = true;
    }

//if passenger less than maximumPassengers then availableRoom == true
loadpassenger(num) {if (num + this.passenger < this.maximumPassengers){
    this.availableRoom = true;
}}

//if mileage is greater than 30000, time for maintenance == true
scheduleService(mileage){if(mileage > 30000){this.scheduleService = false}}

//if fuel is greater than 0, then start == true
start(){if(this.fuel >0)
    return true
}
}

Car.start()