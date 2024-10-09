// pizzaOven() is a function that returns custumized pizza

function pizzaOven(crustype,sauceType,cheeses,toppings){
    var pizza={}  //   creating an empty pizza object
    pizza.crustype=crustype ; //  assigning key + value for the pizza
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses; // array value 
    pizza.toppings=toppings;
    return pizza;              // returning the custumized pizza 

}
var p1=pizzaOven("deep dish","traditional",["99898"],["4644854","sausage"]) // diffrent pizza object 

console.log(p1)
