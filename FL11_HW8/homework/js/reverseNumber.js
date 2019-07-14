function reverseNumber(num) {
    let rev = 0;
    while (num) {
        rev = rev * 10 + num % 10; 
        num = ~~ (num / 10); 
    }    
    return rev;    
}
console.log(reverseNumber(-456));