const CPP_SUBJECTS = [
  "C++ Fundamentals",
  "Advanced C++",
  "C++ for Game Development"
];

const JAVA_SUBJECTS = [
  "Java Basics",
  "Object-Oriented Programming with Java",
  "Java Web Development"
];

const REACT_SUBJECTS = [
  "React Fundamentals",
  "Advanced React",
  "React Native"
];

class Teacher {
  private experienceTeachingC: number;

  constructor(experienceTeachingC: number) {
    this.experienceTeachingC = experienceTeachingC;
  }

  public getRequirements(): string {
    return "A computer and internet connection";
  }

  public getAvailableTeacher(): string {
    return `Teacher with ${this.experienceTeachingC} years of experience`;
  }
}

const cTeacher = new Teacher(10);

console.log("C++");
cTeacher.experienceTeachingC = 10;
console.log(CPP_SUBJECTS);
console.log(cTeacher.getRequirements());
console.log(cTeacher.getAvailableTeacher());

console.log("Java");
cTeacher.experienceTeachingC = 10;
console.log(JAVA_SUBJECTS);
console.log(cTeacher.getRequirements());
console.log(cTeacher.getAvailableTeacher());

console.log("React");
cTeacher.experienceTeachingC = 10;
console.log(REACT_SUBJECTS);
console.log(cTeacher.getRequirements());
console.log(cTeacher.getAvailableTeacher());
