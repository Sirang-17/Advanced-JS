class Student {
    constructor(name, age) {
        this.studentname = name;
        this.studentage = age;
        console.log("Constructor Method called!");
    }
    hello() {
        console.log(`Hello ${this.studentname} Your age is ${this.studentage}`);
    }

    static info() {
        console.log("This is a static method!");
    }
}
let student1 = new Student("Ali", 21);
student1.hello();   //function call of object method
let student2 = new Student("Aliyan", 22);
student2.hello();

Student.info(); // Calling static method using class name

//
//
//

// 1️⃣ Constructor Method
// Automatically runs when an object is created
// Used to initialize values
// Only one constructor per class
// Example:

class student {
  constructor(name, age) {  // Constructor method
    this.name = name;
    this.age = age;
  }
}

const s1 = new student("Ali", 20);  // Creating object s1
// 📌 Used when: Setting initial values.


// 2️⃣ Static Method
// Belongs to the class, not the object
// Called using the class name
// Cannot be accessed using object
// without object we can call it, no need to create object
class MathUtils {
  static add(a, b) {  // Static method
    return a + b;
  }
}

console.log(MathUtils.add(5, 3));
// MathUtils.add() ✅
// new MathUtils().add() ❌
// 📌 Purpose: Perform utility or helper tasks.