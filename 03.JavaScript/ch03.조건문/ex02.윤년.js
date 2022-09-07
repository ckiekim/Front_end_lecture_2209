const year = 2022;

if (year % 400 == 0) {
    console.log(year, '윤년');
} else if (year % 100 == 0) {
    console.log(year, '평년');
} else if (year % 4 == 0) {
    console.log(year, '윤년');
} else {
    console.log(year, '평년');
}