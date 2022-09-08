const array = [52, 273.1, '아침밥', '점심밥', true, false];

// for-of
for (let item of array) {
    console.log(item, typeof(item));
}

// for-in, 파이썬의 enumerate와 유사
for (let i in array) {
    console.log(i, array[i]);
}
