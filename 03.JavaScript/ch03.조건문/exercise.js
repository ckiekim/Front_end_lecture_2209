// 문제 1
function ex01() {
    const bYear = parseInt(document.getElementById('year').value);
    const bMonth = parseInt(document.getElementById('month').value);
    const bDay = parseInt(document.getElementById('day').value);

    const today = new Date()
    const tYear = today.getFullYear();      // 년
    const tMonth = today.getMonth() + 1;    // 월
    const tDay = today.getDate();           // 일, getDay()는 요일을 구하는 메쏘드

    let fullAge;
    if (bMonth < tMonth) {
        fullAge = tYear - bYear;
    } else if (bMonth > tMonth) {
        fullAge = tYear - bYear - 1;
    } else {
        if (bDay <= tDay)
            fullAge = tYear - bYear;
        else
            fullAge = tYear - bYear - 1;
    }

    const res1 = `생년월일: ${bYear}-${bMonth>=10?bMonth:'0'+bMonth}-${bDay>=10?bDay:'0'+bDay}`;
    const res2 = `오늘날짜: ${tYear}-${tMonth>=10?tMonth:'0'+tMonth}-${tDay>=10?tDay:'0'+tDay}, 만 나이: ${fullAge}`;
    document.getElementById('p1').innerText = res1;
    document.getElementById('p2').innerText = res2;
}

// 문제 2
function ex02() {
    const year = parseInt(document.getElementById('year2').value);
    let leapYear;
    if (year % 400 == 0) {
        leapYear = '윤년'
    } else if (year % 100 == 0) {
        leapYear = '평년'
    } else if (year % 4 == 0) {
        leapYear = '윤년'
    } else {
        leapYear = '평년'
    }
    document.getElementById('p3').innerText = `${year}년은 ${leapYear}입니다.`;
}

// 문제 3
function ex03() {
    const score = parseInt(document.getElementById('score').value);
    let grade;
    switch (parseInt(score/10)) {
        case 10:
        case 9:
            grade = 'A';
            break;
        case 8:
            grade = 'B';
            break;
        case 7:
            grade = 'C';
            break;
        case 6:
            grade = 'D';
            break;
        default:
            grade = 'F';
    }
    document.getElementById('p4').innerText = `${score}점은 ${grade}학점입니다.`;
}