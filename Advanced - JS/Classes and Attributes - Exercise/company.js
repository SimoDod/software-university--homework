class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, currDepartment) {
    if (!name || !salary || salary < 0 || !position) {
      throw new Error("Invalid input!");
    }

    if (!this.departments[currDepartment]) {
      this.departments[currDepartment] = {
        avgSalary: 0,
        sumSalary: 0,
        employees: [],
      };
    }
    this.departments[currDepartment].employees.push({ name, salary, position });
    this.departments[currDepartment].sumSalary += salary;
    let resSumSalary = this.departments[currDepartment].sumSalary;
    let resEmpleoyeesCount = this.departments[currDepartment].employees.length;
    this.departments[currDepartment].avgSalary =
      resSumSalary / resEmpleoyeesCount;

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let departmentKeys = Object.keys(this.departments);
    let bestAvgSalary = 0;
    let bestSalaryDepartment;
    let buff = "";

    for (const currDepartment of departmentKeys) {
      
        if (this.departments[currDepartment].avgSalary > bestAvgSalary) {
        bestAvgSalary = Number(this.departments[currDepartment].avgSalary);
        bestSalaryDepartment = currDepartment;
      }
    }
    let sortedEmployees = this.departments[bestSalaryDepartment].employees.sort(
      (a, b) => {
        let salaryA = Object.entries(a)[1][1];
        let salaryB = Object.entries(b)[1][1];
        let nameA = Object.entries(a)[0][1];
        let nameB = Object.entries(b)[0][1];

        return salaryB - salaryA || nameA.localeCompare(nameB);
      }
    );

    buff += `Best Department is: ${bestSalaryDepartment}\nAverage salary: ${bestAvgSalary.toFixed(
      2
    )}\n`;
    sortedEmployees.forEach((x,i) => {
      buff += `${x.name} ${x.salary} ${x.position}\n`;
      
    });

    return buff.substring(0, buff.length-1);
  }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Atan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
