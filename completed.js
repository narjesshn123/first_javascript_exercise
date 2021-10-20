function completed (n) {
    let b = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            b += i;
        }
    }
    if(b === n){
        return "yes"
    }
    else {
        return "no"
    }

}
console.log(completed(0))
console.log(completed(15))