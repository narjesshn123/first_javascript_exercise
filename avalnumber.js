function isPrime(n)
{
    if (n <= 1)
        return false;
    for (let i = 2; i < n; i++)
        if (n % i === 0)
            return false;
    return true;
}
function primeNumbers(a , b)
{
    let arr=[]
    for (let i = a+1 ; i < b ; i++)
    {
        if (isPrime(i))
            arr.push(i)
    }
    return arr;
}
console.log(primeNumbers(4 , 10))