function fizzbuzz(number){
    if (typeof (number) !== 'number')
        return NaN
    if (number%15===0)
        return "fizzbuzz"
    else if (number%5===0)
        return "buzz"
    else if  (number%3===0)
        return "fizz"
    else
        return number
}
console.log(fizzbuzz(45))
console.log(fizzbuzz(15))
console.log(fizzbuzz(10))
console.log(fizzbuzz('3'))






