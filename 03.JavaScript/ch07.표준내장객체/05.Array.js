// Array 생성
const cars = ['Saab', 'Volvo', 'BMW'];
const persons = new Array('James', 'Maria');    // Array도 객체이므로 생성자 함수를 사용해 생성 가능
console.log(cars, persons);

// Array 속성
console.log(cars.length, persons.length);
// 마지막 요소
console.log(cars[cars.length-1]);

// 배열 합치기(concat)
console.log(cars.concat(persons));
console.log(cars + persons);        // cars.toString() + persons.toString()
console.log([cars, persons]);       // Nested array

// 문자열 만들기(join)
console.log(cars.join(' | '));

// 마지막 요소 제거(pop) - 배열이 변함
let car = cars.pop();
console.log(car, cars);
console.clear();

// 마지막에 요소 추가(push) - 배열이 변함
cars.push('Benz');          
// cars 변수는 배열의 데이터가 있는 곳의 주소(reference)를 갖고 있으므로
// const로 변수 선언을 해도 데이터를 변경시킬 수 있음.
console.log(cars);

// 배열의 요소 순서를 뒤집기(reverse) - 배열이 변함
console.log(cars.reverse());
console.log(cars);
function reverseString(str) {       // 문자열을 뒤집는 함수를 reverse() 사용
    /* let strArray = str.split('');
    strArray.reverse();
    let result = strArray.join('');
    return result; */
    return str.split('').reverse().join('');
}
console.log(reverseString('기러기 스위스 토마토'));
// 화살표 함수로 바꾸면
let rs = str => str.split('').reverse().join('');
console.log(rs('기러기 스위스 토마토'));

// 배열의 일부분을 리턴(slice)
const fruits = ['apple', 'banana', 'cherry', 'grape'];
console.log(fruits.slice(1, 3));    // 시작 인덱스, 끝 인덱스(끝은 포함하지 않음)
console.log(fruits.slice(2));       // 끝 인덱스를 생략하면 끝까지
console.clear();

// 배열의 요소를 정렬(sort) - 배열이 변함
console.log(cars);              // [ 'Benz', 'Volvo', 'Saab' ]
cars.sort();                    // 오름차순 정렬
console.log(cars);              // [ 'Benz', 'Saab', 'Volvo' ]

// 내림차순 정렬
const numbers = [45, 67, 35, 97, 82];
numbers.sort().reverse();
console.log(numbers);

// 배열의 일부분을 삭제해서 리턴(splice) - 배열이 변함
const abFruits = fruits.splice(0, 2);
console.log(abFruits, fruits);      // [ 'apple', 'banana' ] [ 'cherry', 'grape' ]
