interface Teacher {
  name: string;
  experienceTeachingC?: number;
}

class Subject {
  private teacher: Teacher;

  setTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
}

class Cpp extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Cpp: \n- Experience in C programming language\n- Knowledge of C++ syntax";
  }

  getAvailableTeacher(): string {
    if (!this.teacher) {
      return "No available teacher";
    }

    if (!this.teacher.experienceTeachingC) {
      return "No available teacher";
    }

    return `Available Teacher: ${this.teacher.name.split(" ")[0]}`;
  }
}
