// PROBLEM 6 

// let a = +prompt('a: ');
// let b = +prompt('b: ');
// let c = +prompt('c: ');

// if (a > b && a > c){
//   console.log(`The highest number is : ${a}`);
// } else if (b > a && b > c){
//   console.log(`The highest number is : ${b}`);
// } else if (c > a && c > b){
//   console.log(`The highest number is : ${c}`);
// }
// else{
//   console.log('Teng');
// }


// PROBLEM 7

// let a = 3;
// let b = 5;
// let c = 10;

// if (a + b > c && b + c > a){
//   console.log('Yes');
// } else{
//   console.log('No');
// }


// PROBLEM 8


// let a = 5;
// let b = 5;
// let c = 5;

// if (a == b && a == c){
//   console.log('Teng tomonli');

// } else if (a != b && a != c && b != a && b != c && c != a && c != b){
//   console.log('Turli tomonli');

// } else if (a == b || a != c || b == a || b != c || c == a || c != b){
//   console.log('Teng yonli');
// }


// PROBLEM 9


// let a = 5;
// let b = 5;
// let c= 5;

// if (a*a + b*b == c*c) {
//   console.log("yes")
// } else if (a*a + c*c == b*b) {
//   console.log("yes")
// } else if (b*b +c*c==a*a) {
//   console.log("yes")
// } else {
//   console.log("No")
// }


// PROBLEM 10


// let a = +prompt('input: ');

// if (a == 1){
//   console.log('Bosh barmoq');
// } else if (a == 2){
//   console.log("Ko'rsatkich barmoq");
// } else if (a == 3){
//   console.log("O'rta barmoq");
// } else if (a == 4){
//   console.log("Nomsiz barmoq");
// } else if (a == 5){
//   console.log("Kichik barmoq");
// } else {
//   console.log("Noto'gri malumot kiritildi");
// }


// PROBLEM 11

// let a = 1234567;
// let sum = 0;

// while (a) {
//   sum += a % 10;
//   a = Math.floor(a / 10);
// }
// console.log(sum);


// PROBLEM 12


// let a = +prompt('input: ');
// let sum = 0;

// for (let i = 1; i<=a; i++){
//   sum +=i;
// }
// console.log(sum);



// PROBLEM 13

// let n = +prompt('input: ');
// let sum = 0;
// for (let i = 1; i<=n; i++){
//   if (i % 2 ==0){
//     sum +=i;
//   }
// }
// console.log(sum);


// PROBLEM 14

// let n = 7;
// let a = 0;
// let b = 1;
// let c = 0;

// for (let i = 1; i <= n -2; i++){
//   c = a+b;
//   a = b;
//   b = c;
// }
// console.log(c);

// Problem #15 

// let n = 211221122111;
// let a = 0;
// let b = 0;

// while (n){
//   let num = n % 10;
//   n /=10;
//   n = Math.floor(n)
//   if (num == 1){
//     a++;
//   } else{
//     b++;
//   }
// }
// if (a < b){
//   console.log(a);
// } else {
//   console.log(b);
// }

// PROBLEM 16

// let n = 4549;
// let count = 0;
// let a;

// while (n){
//   a = n % 10;
//   n /= 10;
//   n = Math.floor(n)

//   if (a > count){
//     count = a;
//   }
// }
// console.log(count);


