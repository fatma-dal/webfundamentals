var count= 1
var countElement=document.querySelector("p")
function add(){
    count++
    countElement.innerText="the count is "+count
    console.log(count)

}
function substruct(){
    count--
    countElement.innerText="the count is " +count

}

function setActive(element) {
    if(element.classList.contains("dark-mode")) {
        element.innerText = "Switch to light mode";
        element.classList.remove("dark-mode");
    } else {
        element.innerText = "Switch to dark mode";
        element.classList.add("dark-mode");
    }
}
