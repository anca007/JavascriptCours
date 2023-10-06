$(function(){

    $('#btToutLeMondeSeCache').on('click', toutLeMondeSeCache)

    $('#btToutLeMondeReapparait').click(toutLeMondeReapparait)

    $('#btLesMarins').on('click', function(){
        $('.marin').toggle()
    })

    //délégation d'évènements
    $('.equipage').on("click", ".marin", function(){
        //$(this).hide()
    })

    //passage de l'event en paramètre et le preventDefault()
    $('#lienEcole').on('click', function(event){

        console.log("Type : " + event.type)
        console.log("Target : " + event.currentTarget)
        //annuler le comportement par défaut
        //event.preventDefault()
    })

    $('#btLesBateaux').click(function(){
        $('.bateau').removeClass('bateau').addClass('avion')

    })

})

function toutLeMondeSeCache(){
    $('div').hide()
}

function toutLeMondeReapparait(){
    $('div').show()
}