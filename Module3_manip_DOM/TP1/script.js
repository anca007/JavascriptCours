//EX1
document.getElementById("color").addEventListener("change", function(){
    document.body.style.backgroundColor = this.value
})

//EX2
// document.querySelector('h1').addEventListener('mouseover', function(){    
//     document.querySelector('h1').innerText = "Mon nouveau titre"
// })

// document.querySelector('h1').addEventListener('mouseleave', function(){    
//     document.querySelector('h1').innerText = "Mon ancien titre"
// })

//EX3
let elems = document.querySelectorAll("h1, h2")
elems.forEach(function(elem){
    elem.addEventListener('mouseenter', enter)
    elem.addEventListener('mouseleave', leave)
})

function enter(e){
    e.currentTarget.innerText = "Mon nouveau titre"
}

function leave(e){
    e.currentTarget.innerText = "Mon ancien titre"
}

//EX4
document.getElementById('btn').addEventListener('mouseenter', function(){

    let value = document.getElementById('txt').value
    if(!value){
        this.style.display = "block"
        this.style.marginTop = Math.random() * 500 + 'px'
        this.style.marginLeft = Math.random() * 500 + 'px'    
    }
})

let mouseEvent = new Event('mouseenter')

document.getElementById('txt').addEventListener('input', function(){
    let button = document.getElementById('btn')

    button.style.display = 'inline-block'
    button.style.marginLeft = '0px'
    button.style.marginTop = '0px'

    if(!this.value){
        button.dispatchEvent(mouseEvent)
    }
})


