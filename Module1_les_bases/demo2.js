//typage dynamique
let number = 1
console.log(number)

//changement de type
number = "bonjour"
console.log(number)

number = true
console.log(number);


//Différence entre val, var et const
let testLet1 = 1
var testVar1 = 2

if(true){
    let testLet2 = 3
    var testVar2 = 4

    console.log(testLet1, testVar1, testLet2, testVar2);
}

console.log(testVar2)

const hello = "Hello !"
//hello = "dfdsg"

//les types complexes
let rand = Math.floor(Math.random() * 100)
console.log(rand)

//Date
const maDate = new Date(2022,2,22)
console.log(maDate);
console.log(maDate.toLocaleDateString());