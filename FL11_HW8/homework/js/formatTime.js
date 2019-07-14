function formatTime (num) {
	let d = 1440;
	let m = 60;
	let day = Math.floor(num / d);
	let hour = Math.floor(num % d / m);
	let minute = Math.floor(num % d % m);
	return ' '+day+' day(s) '+hour+' hour(s) '+minute+' minute(s) ';
}
console.log(formatTime(3601));
