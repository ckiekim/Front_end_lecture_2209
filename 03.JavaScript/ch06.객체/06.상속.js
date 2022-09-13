// 상속(Inheritance), 오버라이딩(Overriding) - 메쏘드 재정의
class Person {
    constructor(name='홍길동', age=25, gender='남자') {       // 속성
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    toString() {                               // 메쏘드
        return `저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`;
    }
}
const hong = new Person();
console.log(hong.toString());
console.log('---------------------------');

class Student extends Person {
    constructor (name, age, gender, scholarship=100000) {
        super(name, age, gender);            // 새로운 속성값을 만들려면 부모의 속성을 먼저 호출해야 함.
        this.scholarship = scholarship;
    }
    toString() {
        return super.toString() + `\n장학금은 ${this.scholarship}원을 받았습니다.`;
    }
}
const student = new Student('성춘향', 17, '여자', 200000);
console.log(student.toString());
console.log('---------------------------');

// Teacher 클래스 - Person 상속, 속성: 담당부서 추가, toString() 메쏘드 재정의
class Teacher extends Person {
    constructor(name, age, gender, dept) {
        super(name, age, gender);
        this.dept = dept;
    }
    toString() {
        return super.toString() + `\n담당반은 ${this.dept}입니다.`;
    }
}
const teacher = new Teacher('제임스', 40, '남자', 'JS-B반');
console.log(teacher.toString());
