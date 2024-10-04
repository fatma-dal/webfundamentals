//looping from 1 to 100for (var i=1;i<=100;i++){
for (var i=1;i<=100;i++){
if(i%5===0 && i%3===0 ){    // we start searching for numbers which are a multiple of 3 and 5 (most specific condition)
    print=console.log("FizzBuzz") //print FizzBuzz

}else if (i%3===0){       // Multiple of 3 we print Fizz
    print=console.log("Fizz")

}else if(i%5===0){       // Multipule of 5 we print Buzz 
    print=console.log("Buzz")

}else {
    print=console.log(i)      // other numbers print it normally
}
}
