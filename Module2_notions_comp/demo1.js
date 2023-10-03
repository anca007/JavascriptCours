//fonction standard
function calculerAge(anneeDeNaissance){
    let date = new Date()
    return date.getFullYear() - anneeDeNaissance
}

console.log(calculerAge(2020))

//fonction anonyme
const hello = function (){
    console.log("Coucou");
}

hello()

//auto-invocation
const dateDuJour = (function(){
    let date = new Date()
    return date.toLocaleDateString()
})()

console.log(dateDuJour);