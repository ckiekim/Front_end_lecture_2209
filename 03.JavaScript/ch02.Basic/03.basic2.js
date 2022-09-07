// 복합 대입 연산자
let a = 10;
a += 10;        //a = a + 10;
console.log(a);

let hello = 'Hello';
hello += 'World!!!';
console.log(hello);

// 증감 연산자
let b = 1;
console.log(a++, ++b);      // post increment, pre increment
console.log(a, b);

// 강제 자료형 변환
console.log(Number('101'), String(101), Number(true), Number(false));
console.log(Boolean(0), Boolean(1), Boolean(''), Boolean(undefined));
console.log(Boolean(0.0), Boolean(2), Boolean('str'));

console.log(Number('string'));      // NaN(Not a Number)
console.log(Number('0o123'), Number('0x123'), Number('0b101'));

// 자동 자료형 변환
console.log(52+'37', 21+31+'37');
console.log(1+true, true+'bool');

// 일치 연산자
console.log(1 == 1.0, 1 === 1.0);
console.log(1 == '1', 1 === '1', 1 !== '1');
