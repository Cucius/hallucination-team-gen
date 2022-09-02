const Employee = require("../lib/employee");
const inquirer = require("inquirer");

class Manager extends Employee {
  constructor(name, id, email, officeNumber, role, nextRole) {
    super(name, id, email, role, nextRole);
    this.officeNumber = officeNumber;
  }

  async getName() {
    await inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Manager's Name?",
          name: "name",
        },
      ])
      .then((answers) => {
        console.log(`The name is ${answers.name}`);
        this.name = answers.name;
      });
  }

  async getOfficeNumber() {
    await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your office number?",
          name: "officeNumber",
        },
      ])
      .then((answers) => {
        console.log(`The office number is ${answers.officeNumber}`);
        this.officeNumber = answers.officeNumber;
      });
  }

  //   async promptUser() {
  //     await this.getName();
  //     await this.getId();
  //     await this.getEmail();
  //     await this.getOfficeNumber();
  //     await this.getRole();
  //   }
}

const manager = new Manager();

manager.promptUser();

module.exports = Manager;
