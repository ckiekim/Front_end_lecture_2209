// 웬만하면 const로 변수를 선언할 것
// 값이 변하는 변수만 var로 선언할 것(2015년 이전)
// let을 사용할 것
const a = 10;
let b = 20;
b += a;
console.log(a, b);

/* 
 * var c = 10;
 * var c = 20;
 * let d = 10;
 * d = 20;
 */

//console.log(Math.PI, Math.sqrt(d));

// 기본 자료형
// 1. Number
console.log(typeof(3.1), typeof(2));

// 2. String
console.log(typeof('abc'), typeof("안녕"));
// template literal
let tl = `a=${a}, b=${b}`;     // back quote, ESC 위의 자판
tl = tl + ' 문자열 결합';
console.log(tl);
let st = '문자열과 숫자의 결합 ' + 123;
console.log(st);
console.log(st, st[0], st[10], st[st.length-1]);

const today = new Date();
console.log(today, today.getFullYear(), today.getMonth()+1);
console.log(typeof today);      // object

// 3. bool
console.log(4 > 3, 4 < 3);      // true, false
console.log(4 > 3 && 10 > 8, '가방' < '나무' || false);     // true, true
console.log(today.getHours() >= 9 && today.getHours() < 18);

// 4. undefined
let pi;
console.log(typeof pi);
pi = Math.PI;
console.log(typeof pi);
