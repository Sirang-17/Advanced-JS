class employee {
    constructor(name, age, salary) {
        this.empname = name;
        this.empage = age;
        this.empsalary =salary;        
    }
    info() {
        console.log(`Employee Name: ${this.empname}, Age: ${this.empage}, Salary: ${this.empsalary}`);
    }
}
class manager extends employee {
     info() {
        let bonus = 5000;
        let tips = 2000;
        let totalSalary = this.empsalary + bonus + tips;
        console.log(`Employee Name: ${this.empname}, Age: ${this.empage}, Salary: ${totalSalary}`);
    }
}    
class developer extends employee {

}
let emp1 = new employee("Ahmed", 28, 50000);
emp1.info();
let manager1 = new manager("Ali", 30, 80000);
manager1.info();
let developer1 = new developer("Aisha", 25, 60000); // remains same as employee
developer1.info();