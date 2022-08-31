const VehicleModule = require('./vehicle').Vehicle
const passPeople = require('./passengerClass.js').Passenger
// const cast = []
class Ford extends VehicleModule {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage)
        this.canFly = false;
        //this.numPassengers = numberPassengers()
        this.canFloat = false;
        this.terrain = ['air','road','off-road','water']
        this.people = passPeople;
        return passPeople
    }

//count the number of people in the car
    // numberPassengers(){
    //     for(i = 0;i>this.people;i++){ 
    //         return i
    //     }}

    changeTerrain(terrain){
        if (terrain === 'air'){
            console.log('Deploy wings')
            this.canFly = true
        }
        else if (terrain === 'water'){
            console.log('Deploy floatation.')
        }
        else {
            console.log('You are driving on land.')
        }
    }



}

let chittyChitty = new Ford('Ford','Zeppelin',1968,'multi',null)

chittyChitty.changeTerrain('air')


// function printArrayAndIndex(input) {
//     input.forEach((numby, catalogue) => {
//         console.log(`This is number: ${numby} and position ${catalogue}and is the type of ${typeof numby}`)
//     })
// }

