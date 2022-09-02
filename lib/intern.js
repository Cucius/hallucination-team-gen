const Employee = require("../lib/employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  async getSchool() {
    await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your school?",
          name: "school",
        },
      ])
      .then((answers) => console.log(`The school is ${answers.school}`))
      .catch((err) => {
        err ? console.log("Fix the error") : console.log("Working");
      });
  }
}

const intern = new Intern();

intern.promptUser();
