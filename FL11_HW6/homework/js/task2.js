let a = +prompt('Enter first side');
let b = +prompt('Enter second side');
let c = +prompt('Enter third side');
if (typeof a, b, c !== 'NaN' && a + b > c && b + c > a && a + c > b && a > 0 && b > 0 && c > 0) {
    if (a === b && b === c) {
        console.log('Equivalent triangle');
    } else if (a === b || b === c || a === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}