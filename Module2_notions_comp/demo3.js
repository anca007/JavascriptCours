//SetTimeout

// console.log("Hello 1")

// setTimeout(function(name){
//     console.log("Hello 2 ! " + name);
// }, 3000, "Sylvain")

// console.log("Hello 3")

// //SetInterval
// function displayAnimal(aAnimal){

//     for (const animal of aAnimal) {
//         console.log(animal)
//     }    
// }

// setInterval(displayAnimal, 2000, ['girage', 'éléphant', 'raton-laveur'])
// console.log("Bélier");

//clearInterval
let cpt = 0
let intervalId = setInterval(function(){
    for(let i = 0; i <5; i++){
        console.log(i);
    }    

    if(++cpt === 2){
        clearInterval(intervalId)
    }

}, 3000)
