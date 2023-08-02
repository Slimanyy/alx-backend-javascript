import { type } from "os";

//Director Interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  
  }

  //Teacher Interface
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }

  //class Director
  class Director implements DirectorInterface {
    workFromHome(): string {
      return 'Working from home';
    }
    getCoffeeBreak(): string {
      return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
      return 'Getting to director tasks';
    }
  }

  //class Teacher

  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
      return 'Cannot have a break';
    }
    workTeacherTasks(): string {
      return 'Getting to work';
    }
  }

  //function createEmployee
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) return new Teacher();
    return new Director();
  }

  //function isDirector
  function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }

  //function executeWork
  function executeWork(employee: DirectorInterface | TeacherInterface): string {
    if (isDirector(employee)) return employee.workDirectorTasks();
    return employee.workTeacherTasks();
  }

  type Subjects = 'Math' | 'History'

  //function teachClass
  function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
      return 'Teaching Math';
    } else if (todayClass === 'History') {
      return 'Teaching History';
    }
  }

