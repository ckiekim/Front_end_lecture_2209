// 클래스를 사용해서 객체를 찍어내는 틀 만들기

class Person {
    constructor (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

james = new Person('제임스', 28, '남자');
maria = new Person('마리아', 24, '여자');
console.log(james);
console.log(maria);
