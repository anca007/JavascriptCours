//EX1
//A l'aide de la méthode Math.random, écrivez un algorithme qui s'arrête lorsque tous les nombres de la plage [0;100[ sont tirés au sort.
//Indiquer le nombre de tirage nécessaire.

let nbPulled = []
let nbPull = 0

do {
    //tire un nombre compris entre 0 et 99
    let number = Math.floor(Math.random() * 100)

    //stocker la valeur
    if(!nbPulled.includes(number)){
        nbPulled.push(number)
    }  

    //compter le nombre de tirage
    nbPull++

//recommencer tant que tous les nombres pas tirés
} while(nbPulled.length < 100)
    
//afficher le nombre de tirage
console.log(nbPulled.sort())
console.log(nbPull)



//EX2
//Trier les lettres de la phrase par ordre alphabétique.
let  sentence = "une chaine avec des lettres dans un certain ordre pour donner du sens"

//transforme la chaine en tableau de caractère
let letters = sentence.split("") //Array.from(sentence)
console.log(letters);

//trier le tableau
letters.sort()
console.log(letters);

//reformer la phrase
let sortedSentence = letters.join("")
console.log(sortedSentence.trim())

//EX3
//Mettre en majuscule la première lettre de chaque mot de la phrase.
let sentence2 = "une phrase sans majuscule"

//faire un tableau de mots
let words = sentence2.split(" ")

//mettre la première lettre en majuscule
for(let i = 0; i < words.length; i++){
    const word = words[i]    
    words[i] = word.charAt(0).toUpperCase() + word.slice(1)
}
//reformer la phrase
console.log(words.join(" "));

//EX4
//Créer un dictionnaire en utilisant map() qui contient les couleurs 
//jaune, rouge, violet et bleu avec comme clé la première lettre de la couleur. 
//Créer un tableau à partir des clés du dictionnaire, servez-vous en pour tirer 5 clés de manière aléatoire
//et afficher la couleur correspondante dans le terminal

//créer le dictionnaire, map
let dico = new Map()
dico.set("j", "jaune")
dico.set("r", "rouge")
dico.set("v", "violet")
dico.set("b", "bleu")

//créer un tableau de clés
let keys = Array.from(dico.keys())
console.log(keys);

for(let i=0; i < 5; i++){
    let index = Math.round(Math.random() * (keys.length - 1))
    console.log(dico.get(keys[index]));
}