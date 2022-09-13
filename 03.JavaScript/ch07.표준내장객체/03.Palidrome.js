// Palindrome
// 세자리 정수 두개를 곱한 결과가 Palindrome 일때
// 가장 큰 수와 그때 두개의 정수는?

// 1) 문자열을 거꾸로 만드는 함수
function reverseString(str) {
    let result = '';
    for (let i=str.length-1; i >= 0; i--)
        result += str[i];
    return result;
}
console.log(reverseString('스위스, 기러기, 토마토'));

// 2) 주어진 문자열이 Palindrome인지 확인하는 함수
function isPalindrome(str) {
    // Palindrome이면 true, 아니면 false를 리턴하는 함수
    return str == reverseString(str);
}
console.log(isPalindrome('우영우'));

// 3) 배열에서 가장 큰 수와 그것의 인덱스 구하기
const array = [3, 98, 27, 51, 46];
// 최대값을 임의로 선정, 제일 첫번째 원소
let maxVal = array[0];      // maxVal = Number.MIN_SAFE_INTEGER
let maxIdx = 0;             // maxIdx = -1
for (let i=1; i<array.length; i++) {
    if (array[i] > maxVal) {
        maxVal = array[i];
        maxIdx = i;
    }
}
console.log(maxIdx, maxVal);

let maxPal = 0, maxI = 0, maxK = 0;
for (let i=100; i<=999; i++) {
    for (let k=i; k<=999; k++) {
        let product = i * k;
        if (isPalindrome(String(product))) {
            if (product > maxPal) {
                maxPal = product;
                maxI = i;
                maxK = k;
            }
        }
    }
}
console.log(`${maxI} x ${maxK} = ${maxPal}`);       // 913 x 993 = 906609
