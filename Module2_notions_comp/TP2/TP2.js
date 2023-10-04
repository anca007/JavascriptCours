//EX1
// let personnage = prompt("Quel est votre personnage préféré des Simpsons ?", "Bart, Homer...")

// if(personnage){
//     sessionStorage.setItem('personnage', personnage)
// }

//EX2
// let personnage = localStorage.getItem('personnage')

// if(!personnage){

//     personnage = prompt("Quel est votre personnage préféré des Simpsons ?", "Bart, Homer...")

//     if(personnage){
//         localStorage.setItem('personnage', personnage)
//     }

// }else{

//     alert("Votre personnage préféré est " + personnage)
//     //alert(`Votre personnage préféré est ${personnage}`)
// }

//EX3
// let personnage = localStorage.getItem('personnage')

// if (!personnage) {

//     personnage = prompt("Quel est votre personnage préféré des Simpsons ?", "Bart, Homer...")

//     if (personnage) {
//         localStorage.setItem('personnage', personnage)
//     }

// } else {

//     let change = confirm("Voulez-vous modifier votre personnage : " + personnage + " ?")

//     if (change) {
//         personnage = prompt("Quel est votre personnage préféré des Simpsons ?", "Bart, Homer...")
//         if (personnage) {
//             localStorage.setItem('personnage', personnage)
//         }
//     }
// }


//EX5
fetch("users.json")
.then(response => response.json())
.then(data => localStorage.setItem('users', JSON.stringify(data)))

console.log(JSON.parse(localStorage.getItem('users')))