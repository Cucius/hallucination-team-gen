const Employee = require("../lib/employee");

class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  async getGithub() {
    await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your GitHub username?",
          name: "github",
        },
      ])
      .then((answers) => console.log(`The GitHub is ${answers.gitHub}`))
      .catch((err) => {
        err ? console.log("Fix the error") : console.log("Working");
      });
  }
}

const engineer = new Engineer();

engineer.promptUser();
