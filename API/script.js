let products = 12;

fetch("https://fakestoreapi.com/products")
    .then(function (response){
        return response.json()
    })
    .then(function (data) {
        
        let ul = document.createElement('ul')

        data.forEach(element => {
            
            let li = document.createElement('li')
            li.innerText = element.title

            ul.appendChild(li)
        });

        document.body.appendChild(ul)
    })

