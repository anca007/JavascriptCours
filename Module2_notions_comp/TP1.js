//EX1
//Créer un tableau contenant 5 mots de votre choix.
//En utilisant la fonction forEach() de javascript, afficher le contenu du tableau dans le terminal 

// const words = ["abeille", "guêpe", "libellule", "cafard", "crevette"]
// words.forEach(function(val){
//     console.log(val);
// })
// //words.forEach(val => console.log(val))

// console.log("--------------------------------");

// //EX2
// //En utilisant le même tableau et la fonction filter() de javascript,
// //extraire les mots qui ne contiennent pas la lettre « a ». 
// //Créer une fonction qui prend un tableau en paramètre afin d’afficher son contenu. 
// //Tester là avec ce que renvoie la fonction filter()

// const wordsWithoutA = words.filter( word => !word.includes("a"))

// function displayTab(aTab){
//     aTab.forEach(function(val){
//         console.log(val);
//     })
// }
// displayTab(wordsWithoutA)

// console.log("--------------------------------");

//EX3
//Créer un compte à rebours (le nombre de départ est paramétrable), qui s'affiche dans le terminal
//et qui se lance après 3 secondes

//let timer = 5

setTimeout(function(timer){
    let intervalId = setInterval(function(){
        console.log(timer);
        if(timer === 0){
            clearInterval(intervalId)
            console.log("BOOOMMM !");
        }
        timer--
    }, 1000)
}, 3000, 10)

//EX4
//Créer une fonction qui peut renvoyer  soit une fonction ajoutant 10 à un nombre, 
//soit une fonction multipliant par 10 un nombre, 
//le choix de la fonction est passé en paramètre de la fonction englobante. 
//Appeler la fonction renvoyée et afficher le résultat

function operation(operator){

    if(operator == "+"){
        return (number) => number + 10
    }else{
        return (number) => number * 10
    }
}

let calcul = operation('*')
console.log(calcul);
let resultat = calcul(25)
console.log(resultat);