const VehicleModule = require('./vehicle').Vehicle
const passPeople = require('./passengerClass.js').Passenger
// const cast = []
class Ford extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.canFly = false;
        this.numPassengers = 
        this.canFloat = false;
        this.terrain = ['air','road','off-road','water']
        this.People = passPeople;
        return passPeople
    }
    
//count the number of people in the car
    numberPassengers(){
        passPeople.forEach
    }

    changeTerrain(terrain){
        if (terrain === 'air'){
            console.log('Deploy wings')
            let this.canFly = true
        }
        else if (terrain === 'water'){
            console.log('Deploy ')
        }
    }

    canDrive(this.people[x]){
        if(this.people[x])
    }



}


//return passPeople