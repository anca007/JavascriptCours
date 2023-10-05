//tous les éléments du DOM
$('*')

//par id
$('#capitaine')

//par class
$('.equipage')
$('.marin')

//par type
$('div')

//par attribut, fonctionne avec tous les attributs
$("[title='titanic']")

//premier élément
$('.marin:first')

//ènième élément
$('.marin:eq(2)')

//dernier élément
$('.marin:last')

//premier enfant
$('.equipage > :first-child')

//tous les éléments d'un type enfant de
$('.equipage > div')

//exclure des éléments
$('.marin').not('.officier')

//par contenu
$(".bateau:contains('Titanic')")
