document.getElementById('btn').addEventListener('click', function () {

    //récupération du contenu de l'input
    let value = document.getElementById('dep').value

    //(value.length > 1 ? value : "0" + value) //Expression ternaire
    //padStart permet de formater une chaine de caractère
    fetch('https://geo.api.gouv.fr/departements/'
        + value.padStart(2, 0) + '/communes')
        .then(response => response.json())
        .then(function (data) {

            //vidage du select afin d'éviter que les options s'accumulent
            document.getElementById('cities').innerHTML = ''

            data.forEach(element => {
                //pour chaque commune, création d'une option
                let option = document.createElement('option')
                //ajout du texte visible par l'utilisateur
                option.innerText = element.nom
                //ajout de la valeur de l'option, utile pour récupérer les infos spécifique d'une commune
                option.value = element.code
                //ajout de l'option au select
                document.getElementById('cities').appendChild(option)
            });
        })
})


document.getElementById("cities").addEventListener('change', function () {

    //this.value correspond à la valeur de l'option sélectionnée
    fetch('https://geo.api.gouv.fr/communes/' + this.value)
        .then(response => response.json())
        .then(function (data) {

            //création d'une balise p
            let p = document.createElement('p')

            //ajout du texte dans le p en fonction des éléments présents dans le JSON
            p.innerText = "Nom : " + data.nom + 
            ", Population : " + data.population + 
            ", CP : " + data.codesPostaux.join("-")

            //ajout du p dans le body
            document.body.appendChild(p)
        })
})