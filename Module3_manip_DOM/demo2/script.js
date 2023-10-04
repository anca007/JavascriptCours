//tirer un nombre au hasard
let rdNumber = getRandomNumber()

//au clic sur le bouton, vérifier le nombre
document.getElementById('btn').addEventListener("click", verification)

//mode triche
document.getElementById("cheat").addEventListener("change", function(event) {
    console.log(event)
    if(this.checked){
        console.log("le nombre est " + rdNumber);
    }else{
        console.clear()
    }
})

function verification(){
    const result = document.getElementById('result')
    //vérification
    //récupérer l'input et sa valeur
    const nbUser = document.getElementById('nbUser').value

    //enlève la class victory
    result.className = ''

    //test et afficher le résultat dans le p.result
    if(rdNumber < nbUser){
        result.innerText = "C'est moins !"
    }else if (rdNumber > nbUser){
        result.innerText = "C'est plus !"
    }else{
        result.className = 'victory'
        result.innerText = "C'est gagné !"

        rdNumber = getRandomNumber()
        document.getElementById('nbUser').value = ""
    }
}

function getRandomNumber(){
    return Math.round(Math.random() * 10) 
}

