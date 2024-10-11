

// function tha add the menu 

function option(id){
    var menu=document.querySelector(id)
    console.log(menu)
    menu.innerText= menu.innerText+"  salmon,tuna,tofu"
    menu.style.add('menu')
}


// function that plays audion when we click on the imagr icon
function playAudio(element,id){
    var audio=document.querySelector(id)
    console.log(element)
    console.log(id)
    audio.play()
    
}