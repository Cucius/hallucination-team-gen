const inquirer = require("inquirer");
const { default: prompt } = require("inquirer/lib/ui/prompt");

class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "employee";
  }

  async getName() {
    await inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Employee's Name?",
          name: "name",
        },
      ])
      .then((answers) => {
        console.log(`The name is ${answers.name}`);
        this.name = answers.name;
      });
  }

  async getId() {
    const answer = await inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the Employee ID?",
          name: "id",
        },
      ])
      .then((answers) => {
        console.log(`The ID is ${answers.id}`);
        this.id = answers.id;
      });
  }

  async getEmail() {
    await inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the Employee's Email address",
          name: "email",
        },
      ])
      .then((answers) => {
        console.log(`The email is ${answers.email}`);
        this.email = answers.email;
      });
  }

  async getRole() {
    await inquirer
      .prompt([
        {
          type: "list",
          message: "Add another Team Member",
          choices: ["Engineer", "Intern", "No more Team Members"],
          name: "role",
        },
      ])
      .then((answers) => {
        console.log(`The next role to add is ${answers.role}`);

        if (answers.role == "Engineer") {
          engineer.promptUser();
        }

        if (answers.role == "Intern") {
          intern.promptUser();
        }
        if (answers.role == "No more Team Members") {
          return;
        }
      });
  }

  async promptUser() {
    await this.getName();
    await this.getId();
    await this.getEmail();
    await this.getRole();
  }
}

module.exports = Employee;
