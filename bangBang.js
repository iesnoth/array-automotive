const VehicleModule = require('./vehicle').Vehicle

class ChittyChitty extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.canFly = false;
        this.maxPassengers = 4;
        this.canFloat = false;
        
    }

}