const values = [1,2,3,4,5]

function transformValues(aNumber, callback){
    let newTab = []
    for (let index = 0; index < aNumber.length; index++) {
        newTab.push(callback(aNumber[index]))        
    }   
    return newTab
}

let transformTab = transformValues(values, function(val){
    return val * 2
})

console.log(transformTab);

//map()
transformTab = values.map(function(val){
    return val / 2
})
console.log(transformTab);



//closure
const displayJob = function(){
    let job = "Développeur"

    return function(val = job){
        console.log("Le métier est " + job);
        console.log("Le paramètre est " + val);

        if(val != job){
            job = val
        }

        console.log("Le nouveau métier est " +job);
    }
}
let whatJob = displayJob()
whatJob()
whatJob("Admin sys")
whatJob("Intégrateur")


//par défaut
function calcul(val, mutiplicator = 2){
    return val * mutiplicator
}

console.log(calcul(4))