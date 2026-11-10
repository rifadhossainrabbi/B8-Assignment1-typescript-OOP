//* problem 1
function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
}


//* problem 2
function processInput(value: string | number | boolean): string | number {
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    if (value) {
      return 'Active';
    } else {
      return 'Inactive';
    }
  }

  return value;
}


//* problem 3
function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}



//* problem 4
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}



// * problem 5
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}


function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    course => course.isPublished === true && course.students >= minStudents,
  );
}



//* problem 6

//? keyof T is a TypeScript utility type that represents the keys of a given type T. It allows you to create a type that consists of the property names (keys) of an object type. When you use keyof T, you get a union type of all the keys in the object type T.

//* T[K][] is a TypeScript syntax that allows you to access the type of a specific property of an object type T using a key K. It represents the type of the value associated with the key K in the object type T.
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map(item => item[key]);
}



//* problem 7
class Employee {
  protected name: string;
  private baseSalary: number;
  //? protected: The protected access modifier allows the property to be accessed within the class and its subclasses, but not from outside the class hierarchy.
  //? private: The private access modifier restricts access to the property only within the class itself. It cannot be accessed from outside the class or its subclasses.

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    //* super(name, baseSalary) calls the constructor of the parent class (Employee) to initialize the inherited properties (name and baseSalary). This ensures that the Manager class has access to the properties and methods defined in the Employee class.
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager('Alice', 50000, 'Engineering');


//* problem 8
const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve('Access Granted');
      }, 1000);
    } else {
      reject(new Error('Access Denied: Must be 18 or older'));
    }
  });
};
