//Création de tableaux

let tab = []
tab[0] = null
tab[5] = 12
tab.push("coucou !")

// console.log(tab)

let tab2 = ['Java', 'Javascript', 'Cobol']
tab2.push('PHP')
// console.log(tab2)
// console.log('Langages : %s, %s, %s', tab2[0], tab2[2], tab2[3])

//itération
// for(let i =0; i < tab2.length; i++){
//     console.log(tab2[i])
// }
// console.log('------------')

// for(const value of tab2){
//     console.log(value)
// }


//MAP
let dico = new Map()
dico.set(2, "hello")
dico.set("tuc", "bidule")
// console.log(dico.get("tuc"));
// console.log(dico.get(2));

//SET
let setExemple = new Set()
setExemple.add(2)
setExemple.add("bonjour")
setExemple.add(4)
setExemple.add(2)

console.log(setExemple);
console.log(setExemple.has(4));
console.log(setExemple.has(18));

const numbers = [1,1,2,33,4,5,55,5]
console.log(new Set(numbers))



