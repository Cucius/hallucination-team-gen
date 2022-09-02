const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// store team members
let teamMembers = [];

// flag to control questions
let continueAddingMembers = true;

// call rest of functions in order
const start = async () => {
  await promptUser().then(() => {
    console.log(teamMembers);
    // generate html
  });
};

// get answers from user
const promptUser = async () => {
  let managerFlag = true;
  let nextEmployee = "";

  while (continueAddingMembers) {
    const questions = [
      {
        type: "input",
        message: `What is the name of the ${managerFlag ? "manager" : "employee"}?`,
        name: "name",
      },
      {
        type: "input",
        message: `Enter the ${managerFlag ? "manager" : "employee"}'s ID:`,
        name: "id",
      },
      {
        type: "input",
        message: `Enter the ${managerFlag ? "manager" : "employee"}'s email:`,
        name: "email",
      },
    ];

    const managerQuestions = questions;

    managerQuestions.push({
      type: "input",
      message: "Enter the team manager's office number:",
      name: "officeNumber",
    });

    const dealWithAnswers = async (answers) => {
      let roleSpecificPrompts = "";

      if (nextEmployee === "Engineer") {
        roleSpecificPrompts = await inquirer.prompt([
          {
            type: "input",
            message: "Enter the Employee's GitHub Username:",
            name: "gitHub",
          },
        ]);

        const engineer = new Engineer(answers.name, answers.id, answers.email, roleSpecificPrompts.gitHub);
        teamMembers.push(engineer); // push new team member
      } else if (nextEmployee === "Intern") {
        roleSpecificPrompts = await inquirer.prompt([
          {
            type: "input",
            message: "Enter the Employee's school:",
            name: "school",
          },
        ]);

        const intern = new Intern(answers.name, answers.id, answers.email, roleSpecificPrompts.school);
        teamMembers.push(intern); // push new team member
      } else if (nextEmployee === "No more team members") {
        // flip control flag
        continueAddingMembers = false;
      }
    };

    if (managerFlag) {
      const answers = await inquirer.prompt(managerQuestions);
      managerFlag = false;

      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      teamMembers.push(manager);
    } else {
      const answers = await inquirer.prompt(questions);

      await dealWithAnswers(answers);
    }

    const continueOrNot = await inquirer.prompt([
      {
        type: "list",
        message: "Add another Team Member",
        choices: ["Engineer", "Intern", "No more team members"],
        name: "role",
      },
    ]);

    if (continueOrNot.role === "No more team members") {
      continueAddingMembers = false;
      nextEmployee = "No more team members";
    } else if (continueOrNot.role === "Engineer") {
      nextEmployee = "Engineer";
    } else if (continueOrNot.role === "Intern") {
      nextEmployee = "Intern";
    }
  }
};

start();

/*
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

// use class to determine html

// html based on employee role
// new employee -> new manager
// employee.id employee.email .... manager.officeNumber
//
