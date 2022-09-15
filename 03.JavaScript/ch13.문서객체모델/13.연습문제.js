function answer1() {
    const first = parseInt(document.getElementById('first').value);
    const second = parseInt(document.getElementById('second').value);
    console.log(first, second);
    let result = [];
    for (let i=first; i<=second; i++) {
        if (i == first+1 || i == second-1)
            continue;
        result.push(Math.pow(2, i));
    }
    document.getElementById('result1').innerHTML = result.join(', ');
}

function answer2() {
    const text = document.getElementById('text').value;
    const noPunct = text.replace(/[-',.]/g, '').replace(/\n/g, ' ');    // 구둣점 제거, 줄바꿈은 공백으로 변경
    console.log(noPunct);
    const words = noPunct.split(' ');
    let count = 0;
    for (let word of words) {
        if (word == 'the')
            count++;
    }
    document.getElementById('result2').innerHTML = `the의 갯수는 <strong>${count}</strong>개`;
}

function answer3() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const divisors1 = [];
    for (let i=1; i<=num1; i++) {
        if (num1 % i == 0)
        divisors1.push(i);          // num1의 약수
    }
    const divisors2 = [];
    for (let i=1; i<=num2; i++) {
        if (num2 % i == 0)
            divisors2.push(i);      // num2의 약수
    }
    const commonDivisors = divisors1.filter(val => divisors2.includes(val));
    document.getElementById('result3').innerHTML = `Set(${commonDivisors.join(', ')})`;
}