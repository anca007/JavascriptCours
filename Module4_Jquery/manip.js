$(init)

function init(){

    let numeroMarin = 6

    $('#ajouterUnMarin').click(function(){

        //let nouveauMarin = $('<div></div>').addClass('marin')
        let nouveauMarin = $("<div class='marin'></div>")

        nouveauMarin.text("M" + numeroMarin)

        nouveauMarin.attr('title', "M" + numeroMarin)

        nouveauMarin.css("background-color", "green")

        //ajout de l'élément à partir du parent
        //$('.equipage').append(nouveauMarin)

        //ajout à partir de l'enfant
        //nouveauMarin.appendTo($('.equipage'))

        //ajout en tant que premier enfants
        //$('.equipage').prepend(nouveauMarin)

        //ajout à la suite du M2
        $(".marin:contains('M2')").after(nouveauMarin)

        numeroMarin++

    })

    $('.marin').click(function(){
        //modifie le numéro du marin
       $(this).text('M' + numeroMarin)
       numeroMarin++
    })

    $('#coulerBateau').click(function(){

        if($('.bateau').length > 0){
            $('.bateau')[0].remove()
        }
    })

}