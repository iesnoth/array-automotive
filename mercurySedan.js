const VehicleModule = require('./vehicle').Vehicle

// //this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass")

// //this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class Car extends VehicleModule {
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
    loadpassenger(number) {
        if (number + this.passenger < this.maximumPassengers) {
            this.passenger = number;
            this.availableRoom = true;
            console.log(`The car currently has ${this.passenger} passengers.`)
        }
        else {
            this.availableRoom = false;
            console.log(`There is no available room.`)
        }
    }

    //if fuel is greater than 0, then start == true
    start() {
        if (this.fuel > 0)
            console.log('engine start')
        return this.started = true
    }

    //if mileage is greater than 30000, time for maintenance == true
    scheduleMaintenance() {
        if (this.mileage > 30000) {
            this.scheduleService = true
            console.log(`It's time to schedule maintenance.`)
        }
        else {
            console.log(`Schedule maintenance at 30000 miles.`)
        }
    }
}

let sedan = new Car('Sedan', 'Mercury', 2016, 'tan', 120000);

sedan.loadpassenger(5)
sedan.scheduleMaintenance()
sedan.start()
console.log(sedan)