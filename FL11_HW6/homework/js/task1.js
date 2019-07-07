let a1 = +prompt('enter point a1');
let a2 = +prompt('enter point a2');
let b1 = +prompt('enter point b1');
let b2 = +prompt('enter point b2');
let c1 = +prompt('enter point c1');
let c2 = +prompt('enter point c2');
const d = 2;
if (typeof a1, a2, b1, b2, c1, c2 !== 'NaN' && (a1 + b1) / d === c1 && (a2 + b2) / d === c2) {
	console.log(true);
} else {
	console.log(false);
}