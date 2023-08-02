// interface for teacher 

interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [propName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
console.log(teacher3);


const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);

  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  function printTeacher(firstName: string, lastName: string) : string  {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const formattedlastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)

    return `${firstInitial}. ${formattedlastName}`

  }

  interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
  }

  class StudentClass implements StudentInterface {
    constructor(public firstName: string,public lastName: string) {}

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
  }