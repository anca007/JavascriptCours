//récupération d'élément
const h1 = document.querySelector("h1")
console.log(h1)

//ajouter d'une class
h1.className = "title"


//paragraphe
const p1 = document.getElementById("paragraphe1")
//modifier texte
p1.innerText = "Le Javascript modifie le DOM !"

const p2 = document.getElementById("paragraphe2")
p2.innerHTML = "Le javascript modifie le <code>DOM</code>"

//création d'éléments
//récupération du ul
const ul = document.getElementById('liste')
for (let index = 0; index < 10; index++) {
    const li = document.createElement('li')
    li.innerText = "li " + index
    li.id = "li" + index
    //li.setAttribute('id', "li" + index)
    ul.appendChild(li)
}

document.body.style.backgroundColor = "cornflowerblue"
