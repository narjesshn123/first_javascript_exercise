function pow2(n) {
    let x=0 ;
    while (2**x<=n) {
        x++
    }
    return 2**x
}
console.log(pow2(95))
console.log(pow2(1010))
console.log(pow2(20))