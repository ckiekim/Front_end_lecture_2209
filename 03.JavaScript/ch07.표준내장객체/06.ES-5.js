// ECMAScript-5(ES-5, 2009년)에서 추가된 Array method

const fruits = ['apple', 'banana', 'cherry', 'grape'];

// 배열 순회 메쏘드(forEach)
fruits.forEach(function(value, index) {
    console.log(`인덱스 ${index}의 값은 ${value} 입니다.`);
});
fruits.forEach(value => console.log(value));

// 배열의 각 요소에 대해서 함수 적용(map)
const numbers = [4, 16, 9, 25, 36];
let result = numbers.map(function(num) {
    return Math.sqrt(num);
});
console.log(result);
result = numbers.map(x => Math.sqrt(x));
console.log(result);

// 배열에서 기준을 만족시키는 것만 추출(filter)
// 20보다 큰 수만 추출
result = numbers.filter(value => value > 20);
console.log(result);


// 앞으로 해결해야 할 과제 -- Callback 함수, method chaining 적용
const objArray = [
    {name:'제임스', score:80, math:80, sci:70},
    {name:'마리아', score:90, math:90, sci:70},
    {name:'아담', score:70, math:80, sci:60},
    {name:'이브', score:65, math:70, sci:80}
]
// 성적(score)의 내림차순으로 정렬을 해 보세요.
// math와 sci의 평균을 구하세요.
// math 점수가 80점 이상인 사람