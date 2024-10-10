
var namee = document.querySelector(".nameimg h1")
console.log(namee)
function edit(){
    namee.innerText="Fatma D"
}

// var userinfo =document.querySelector("#name")
function removeuser(id){
    document.querySelector(id).remove()
}


function decrease(id){
    var count=document.querySelector(id).innerText
    count--
    console.log(id)
    document.querySelector(id).innerText=count
}
function increase(id){
    var count=document.querySelector(id).innerText
    count++
    document.querySelector(id).innerText=count
}