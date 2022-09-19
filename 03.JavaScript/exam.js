let _x='10', $y=10;
console.log(_x===$y);       // false
console.log(_x==$y);        // true

function a() {
    console.log('first');
}
function a() {
    console.log('second');
}
a();                        // 'second'

console.log('0123456789'.substring(5,8));   // '567'

// 1.
function ans1(num1, num2) {
    let small = (num1 < num2) ? num1 : num2;
    let big = (num1 > num2) ? num1 : num2;
    let result = [];
    for (i=small; i<=big; i+=3) {
        result.push(i);
    }
    return result;
}
console.log(ans1(2,10));        // [ 2, 5, 8 ]
console.log(ans1(12,3));        // [ 3, 6, 9, 12 ]

// 2.
function ans2(birthday) {
    let bYear = parseInt(birthday.substring(0,2));
    bYear = (bYear > 22) ? 1900+bYear : 2000+bYear;
    let bMonth = parseInt(birthday.substring(2,4));
    let bDay = parseInt(birthday.substring(4));
    console.log(bYear, bMonth, bDay);

    let today = new Date();
    let tYear = today.getFullYear();
    let tMonth = today.getMonth()+1;
    let tDay = today.getDate();

    if (tMonth > bMonth)
        return tYear-bYear;
    if (tMonth < bMonth)
        return tYear-bYear-1;
    if (tDay >= bDay)
        return tYear-bYear;
    return tYear-bYear-1;
}
console.log(ans2('991003'));
console.log(ans2('000919'));
console.log(ans2('000920'));

// 3.
function ans3(num) {
    let star = '';
    for (let i=num; i>=1; i-=2) {
        let line = '';
        for (let k=(i-1)/2; k<(num-1)/2; k++)
            line += ' ';
        for (let k=0; k<i; k++)
            line += '*';
        star += line + '\n';
    }
    for (let i=(num+1)/2; i<=num; i+=2) {
        let line = '';
        for (let k=(i-1)/2; k<(num-1)/2; k++)
            line += ' ';
        for (let k=0; k<i; k++)
            line += '*';
        star += line + '\n';
    }
    return star;
}
console.log(ans3(9));
console.clear();

// 4. 
function ans4(str) {
    prices = str.split(';').map(x => parseInt(x)); 
    return prices.sort((a,b) => b-a);      // a - b: 오름차순, b - a: 내림차순
}
console.log(ans4('51900;83000;158000;367500;250000;59200;128500;1304000'));

// 5.
class Member {
    constructor(id, name, email, tel) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.tel = tel;
    }
    toString() {
        return `id는 ${this.id}, 이름은 ${this.name}, 이메일은 ${this.email}, 전화번호는 ${this.tel}`;
    }
}

james = new Member('james', 'James', 'james@kis.com', '010-2345-6789');
console.log(james.toString());