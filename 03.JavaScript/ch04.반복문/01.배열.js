const array = [52, 273.1, '아침밥', '점심밥', true, false];
console.log(array[0], array[2]);
console.log(array.length, array[array.length-1]);
console.log(typeof array);

// Element 추가
array[array.length] = 6;
array.push('push');
console.log(array);
console.log(array.toString());

// 기본 for-loop
for (let i=0; i < array.length; i++) {  // 초기값, 조건, 증감분
    console.log(i, array[i]);
}

// Enhanced for-loop
for (let item of array) {
    console.log(item);
}