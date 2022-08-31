const  cast =[]

class Passenger {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        cast.push(this)
    }

}

let mrPotts = new Passenger('Caractacus Potts',30, 'male')
let truly = new Passenger('Truly Scrumptious',26,'female')
let boyPotts = new Passenger('Jeremy Potts',10, 'male')
let girlPotts = new Passenger('Jemima Potts',8,'female')

console.log(cast)
module.exports = {
    Passenger
}

