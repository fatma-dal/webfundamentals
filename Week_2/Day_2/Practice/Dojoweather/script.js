function removeCookie(id){
    var cookie = document.querySelector(id)
    console.log(cookie)
    cookie.remove()
}


function convert(id){
    if (document.querySelector(id).value=="°F"){
        document.querySelector(id)="°C"

    }else{
        document.querySelector(id)="°F"
    }
}