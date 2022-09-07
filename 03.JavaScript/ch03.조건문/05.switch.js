const month = Math.ceil(Math.random() * 12);

switch (month) {
    case 1:
    case 2:
    case 12:
        console.log(month+'월', '겨울');
        break;
    case 3:
    case 4:
    case 5:
        console.log(month+'월', '봄');
        break;
    case 6:
    case 7:
    case 8:
        console.log(month+'월', '여름');
        break;
    case 9:
    case 10:
    case 11:
        console.log(month+'월', '가을');
        break;
}

// 코드 리팩토링
switch (parseInt(month/3)) {
    case 1:
        console.log(month+'월', '봄');
        break;
    case 2:
        console.log(month+'월', '여름');
        break;
    case 3:
        console.log(month+'월', '가을');
        break;
    default:
        console.log(month+'월', '겨울');
}

const mon = parseInt(month/3);
const season = mon == 1 ? '봄' : mon == 2 ? '여름' : mon == 3 ? '가을' : '겨울';
console.log(month, season);
