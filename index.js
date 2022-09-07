const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// store team members
let teamMembers = [];

// flag to control questions

let managerFlag = true;

// call rest of functions in order
const start = async () => {
  await promptUser();
  console.log(teamMembers);
  // generate html
  // make html template
};

// get answers from user
const promptUser = async () => {
  let nextEmployee = "";

  //runs through questions if managerFlag is true
  const questions = [
    {
      type: "input",
      message: `What is the name of the ${managerFlag ? "manager" : "employee"} ?`,
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

  const managerQuestions = [...questions];

  managerQuestions.push({
    type: "input",
    message: "Enter the team manager's office number:",
    name: "officeNumber",
  });

  const continueOrNot = [
    {
      type: "list",
      message: "Add another Team Member",
      choices: ["Engineer", "Intern", "No more team members"],
      name: "role",
    },
  ];

  // const dealWithAnswers = async () => {
  //   managerFlag = false;
  //   let roleSpecificPrompts = "";

  const addEng = async () => {
    let roleSpecificPrompts = "";
    const answers = await inquirer.prompt(questions);

    roleSpecificPrompts = await inquirer.prompt([
      {
        type: "input",
        message: "Enter the Employee's GitHub Username:",
        name: "gitHub",
      },
    ]);

    const engineer = new Engineer(answers.name, answers.id, answers.email, roleSpecificPrompts.gitHub);
    teamMembers.push(engineer);

    const menu = await inquirer.prompt(continueOrNot);
    if (menu.role === "No more team members") {
      nextEmployee = "No more team members";
    } else if (menu.role === "Engineer") {
      nextEmployee = "Engineer";
      await addEng();
    } else if (menu.role === "Intern") {
      nextEmployee = "Intern";
      await addInt();
    }
  };

  const addInt = async () => {
    let roleSpecificPrompts = "";
    const answers = await inquirer.prompt(questions);

    roleSpecificPrompts = await inquirer.prompt([
      {
        type: "input",
        message: "Enter the Employee's school:",
        name: "school",
      },
    ]);

    const intern = new Intern(answers.name, answers.id, answers.email, roleSpecificPrompts.school);
    teamMembers.push(intern);

    const menu = await inquirer.prompt(continueOrNot);
    if (menu.role === "No more team members") {
      nextEmployee = "No more team members";
    } else if (menu.role === "Engineer") {
      nextEmployee = "Engineer";
      await addEng();
    } else if (menu.role === "Intern") {
      nextEmployee = "Intern";
      await addInt();
    }
  };
  if (managerFlag == true) {
    const answers = await inquirer.prompt(managerQuestions);

    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);

    const menu = await inquirer.prompt(continueOrNot);

    if (menu.role === "No more team members") {
      nextEmployee = "No more team members";
    } else if (menu.role === "Engineer") {
      nextEmployee = "Engineer";
      await addEng();
    } else if (menu.role === "Intern") {
      nextEmployee = "Intern";
      await addInt();
    }
  } else {
    const menu = await inquirer.prompt(continueOrNot);

    if (menu.role === "No more team members") {
      nextEmployee = "No more team members";
    } else if (menu.role === "Engineer") {
      nextEmployee = "Engineer";
      await addEng();
    } else if (menu.role === "Intern") {
      nextEmployee = "Intern";
      await addInt();
    }
  }
};

start();
