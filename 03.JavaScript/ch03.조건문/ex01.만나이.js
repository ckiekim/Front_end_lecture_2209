const bYear = 2000;
const bMonth = 9;
const bDay = 26;

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
console.log(`생년월일: ${bYear}-${bMonth>=10?bMonth:'0'+bMonth}-${bDay>=10?bDay:'0'+bDay}`);
console.log(`오늘날짜: ${tYear}-${tMonth>=10?tMonth:'0'+tMonth}-${tDay>=10?tDay:'0'+tDay}, 만 나이: ${fullAge}`);