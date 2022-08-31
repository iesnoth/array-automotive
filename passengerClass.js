const  cast =[]

class Passenger {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        cast.push(this)
    }

    driveWell(){
        if(this.gender === 'male' && this.age >= 18){
            console.log(`${this.name} can drive well, but is it worth it?`)
        }
        else if (this.gender === 'female' && this.age >= 18){
            console.log(`${this.name} can't drive well for the sake of comedy.`)
        }
        else{
            console.log(`${this.name} is a child, thus cannot drive.`)
        }}
}



// class Driver extends Passenger{
//     constructor(name, age, gender){
//         super(name, age, gender)
//         canDrive = true
//         cast.push(this)
//     }

//     driveWell(){
//         if(this.gender === 'male'){
//             console.log(`${this.name} can drive well, but is it worth it?`)
//         }
//         else{
//             console.log(`${this.name} can't drive well for the sake of comedy.`)
//         }}
// }

let mrPotts = new Passenger('Caractacus Potts',30, 'male')
let truly = new Passenger('Truly Scrumptious',26,'female')
let boyPotts = new Passenger('Jeremy Potts',10, 'male')
let girlPotts = new Passenger('Jemima Potts',8,'female')

console.log(cast)
truly.driveWell()
boyPotts.driveWell()



module.exports = {
    Passenger
}

