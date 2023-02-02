interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingJava?: number;
}

class JavaClass {
  teacher: Teacher;

  constructor(teacher: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return "Here is the list of requirements for Java: \n" +
      "- Good understanding of object-oriented programming concepts \n" +
      "- Familiarity with Eclipse or IntelliJ IDEA \n" +
      "- Knowledge of Java SE, Java EE, and Java ME \n" +
      "- Experience in building applications using Java";
  }

  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingJava) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return "No available teacher";
    }
  }
}
