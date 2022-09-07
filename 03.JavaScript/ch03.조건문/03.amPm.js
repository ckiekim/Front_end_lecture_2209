const currentTime = new Date();

if (currentTime.getHours() < 12) {
    console.log(`${currentTime.toLocaleString()}은/는 오전입니다.\n`);
} else {
    console.log(`${currentTime.toLocaleString()}은/는 오후입니다.\n`);
}