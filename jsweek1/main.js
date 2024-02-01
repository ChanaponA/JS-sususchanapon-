const x = [175,50,25,1]

let a = x.reduce((b,c)=>b+c,0);
console.log(a);

let y = a / x.length;
console.log(y);

let m = Math.max(...x);
console.log(m);

let min = Math.min(...x);
console.log(min);