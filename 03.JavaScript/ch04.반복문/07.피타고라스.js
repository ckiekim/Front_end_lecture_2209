// a + b + c = 1000을 만족하는 피타고라스 수
// 단, a < b < c

for (let b = 1; b < 1000; b++) {
    for (let a = 1; a < b; a++) {
        c = 1000 - a - b;
        if (a*a + b*b == c*c) {
            console.log(a, b, c);
            break;
        }
    }
}
