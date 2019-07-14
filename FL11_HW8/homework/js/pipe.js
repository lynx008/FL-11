function addOne(x) {
  return x + 1;
}
function pipe(b, ...args) {
    let num = b;
    for (let i = 0; i < args.length; i++) {
        num = args[i](num);
    }
    return num;
}
console.log(pipe(1, addOne, addOne, addOne, addOne));