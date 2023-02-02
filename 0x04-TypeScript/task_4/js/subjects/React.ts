interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingReact?: number;
}

class ReactClass {
  teacher: Teacher;

  constructor(teacher: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return "Here is the list of requirements for React: \n" +
      "- Good understanding of JavaScript \n" +
      "- Familiarity with HTML and CSS \n" +
      "- Knowledge of React and its components \n" +
      "- Experience in building applications using React";
  }

  getAvailableTeacher(): string {
    if (this.teacher.experienceTeachingReact) {
      return `Available Teacher: ${this.teacher.firstName}`;
    } else {
      return "No available teacher";
    }
  }
}
