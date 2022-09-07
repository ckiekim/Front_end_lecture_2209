const score = Math.ceil(Math.random()*50 + 50);

switch (parseInt(score/10)) {
    case 10:
    case 9:
        console.log(score, 'A');
        break;
    case 8:
        console.log(score, 'B');
        break;
    case 7:
        console.log(score, 'C');
        break;
    case 6:
        console.log(score, 'D');
        break;
    default:
        console.log(score, 'F');
}