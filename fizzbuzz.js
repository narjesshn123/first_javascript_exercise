function fizzbuzz(number){
    if (number%3===0)
        console.log("fizz")
    if (number%5===0)
        console.log("buzz")
    if  (number%15===0)
        console.log("fizzbuzz")
    else
        console.log(number)
}
fizzbuzz(15)