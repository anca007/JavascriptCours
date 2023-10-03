//créer un cookie
document.cookie = "prenom=sylvain"

//éditer un cookie
document.cookie = "prenom=Bernard"

//durée de vie
document.cookie = "prenom=Bernard;max-age=3600"

//ajouter un autre cookie
document.cookie = "age=25;max-age=3600"

//récupérer les cookies
let cookies = document.cookie
console.log(cookies);

//storage
localStorage.setItem("prenom", "sylvain")
sessionStorage.setItem("age", 25)

