// Q1
let first = Math.ceil(Math.random()*20);        // 1 ~ 20
let second = 0;
while (second < first+4) {
    second = Math.ceil(Math.random()*21 + 9);   // 10 ~ 30
}
console.log(first, second);
const powerArray = [];
for (let i=first; i<=second; i++) {
    if (i == first+1 || i == second-1)      // 앞에서 두번째, 뒤에서 두번째는 제외
        continue;
    powerArray.push(Math.pow(2, i));
}
console.log(powerArray);
console.clear()

// Q2. 
const text = `
the grown-ups' response, this time, was to advise me to lay aside my drawings of boa constrictors, 
whether from the inside or the outside, and devote myself instead to geography, history, arithmetic, 
and grammar. That is why, at the, age of six, I gave up what might have been a magnificent career 
as a painter. I had been disheartened by the failure of my Drawing Number One and my Drawing Number Two. 
Grown-ups never understand anything by themselves, and it is tiresome for children to be always and 
forever explaining things to the.`;
const noPunct = text.replace(/[-',.]/g, '').replace(/\n/g, ' ');    // 구둣점 제거, 줄바꿈은 공백으로 변경
console.log(noPunct);
const words = noPunct.split(' ');
let count = 0;
for (let word of words) {
    if (word == 'the')
        count++;
}
console.log(count);
console.clear();

// Q3. 
const num1 = Math.ceil(Math.random()*89 + 10);  // 11 ~ 99
const num2 = Math.ceil(Math.random()*89 + 10);  // 11 ~ 99
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
console.log(num1, num2);
console.log(divisors1);
console.log(divisors2);
let cd = divisors1.filter(function(val) {
    return divisors2.includes(val);         // Boolean
});
console.log(cd);
const commonDivisors = new Set(divisors1.filter(val => divisors2.includes(val)));
console.log(commonDivisors);
console.clear();

// Q4
const cars = ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino'];
const manufacturers = cars.map(x => x.split(' ')[0]);
console.log(manufacturers);
//const models = cars.map(x => x.split(' ').slice(1).join(' '));    // 배열
const models = cars.map(x => x.substring(x.indexOf(' ')+1));        // 문자열
console.log(models);