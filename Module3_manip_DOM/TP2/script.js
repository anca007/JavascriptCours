let visible = false

document.getElementById('oeil').addEventListener('click', function () {

    if (visible) {
        this.setAttribute('src', 'images/eye-close.png')
        this.setAttribute('alt', 'Icône oeil fermé')
        //this.src = 'images/eye-open.png'
        document.getElementById('mdp').setAttribute('type', 'password')
        visible = false

    } else {
        this.setAttribute('src', 'images/eye-open.png')
        this.setAttribute('alt', 'Icône oeil ouvert')
        document.getElementById('mdp').setAttribute('type', 'text')
        visible = true
    }
})

//longueur
function checkLength(mdp) {

    if (mdp.length >= 8) {
        colorGreen("nbCaracteres")
    } else {
        colorRed("nbCaracteres")
    }
}

function checkUpper(mdp){
    let isMaj = false
    for (const letter of mdp) {
        if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
            isMaj = true
        }
    }    

    if (isMaj) {
        colorGreen('majuscule')
    } else {
        colorRed('majuscule')
    }
}

function checkLower(mdp){
    let isMin = false
    for (const letter of mdp) {
        if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
            isMin = true
        }
    }    

    if (isMin) {
        colorGreen('minuscule')
    } else {
        colorRed('minuscule')
    }
}

function checkNumber(mdp){
    let isNum = false
    for (const letter of mdp) {
        if (letter.charCodeAt(0) >= 48 && letter.charCodeAt(0) <= 57) {
            isNum = true
        }
    }   

    if (isNum) {
        colorGreen('chiffre')
    } else {
        colorRed('chiffre')
    }
}

function colorRed(id) {
    document.getElementById(id).style.color = 'red'
    document.getElementById(id).className = ''
}

function colorGreen(id) {
    document.getElementById(id).style.color = 'green'
    document.getElementById(id).className = 'validate'
}

document.getElementById('mdp').addEventListener('input', function () {
    checkLength(this.value)
    checkUpper(this.value)
    checkLower(this.value)
    checkNumber(this.value)
    finalCheck()
})

function finalCheck(){

    let elems = document.querySelectorAll('.infos .validate')
    if(elems.length == 4){
        document.getElementById('valider').disabled = false
    }else{
        document.getElementById('valider').disabled = true
    }

}


