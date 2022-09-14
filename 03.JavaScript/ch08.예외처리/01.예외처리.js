//error.error.error();    // Reference error 발생

try {
    error.error.error();
} catch(e) {
    console.log(e.name);
    console.log(e.message);
}
console.log('-------------------------------------');

function callThreeTimes(callback) {
    if (typeof(callback) == 'function') {
        for (let i=0; i<3; i++)
            callback();
    } else {
        console.log('callback 함수를 정의하세요.');
    }
}

function myFunc() {
    console.log('호출이 되었음');
}

callThreeTimes(myFunc);
callThreeTimes();           // undefined

function callThreeTimes2(callback) {
    try {
        for (let i=0; i<3; i++)
            callback();
    } catch(e) {
        console.log('callback 함수를 정의하세요.');
    }
}
callThreeTimes2();


console.log('프로그램 정상 종료');