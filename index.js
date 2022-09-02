const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// call rest of functions in order
const start = async () => {
  await promptUser();
};

// get answers from user
const promptUser = async () => {};

/*
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

// prompt for role

// use class to determine html

// html based on employee role
// new employee -> new manager
// employee.id employee.email .... manager.officeNumber
//

//Generate a webpage that displays Team's basic info

// -- Command-line app that accepts user input
// 	-prompt for team members and info

// 	*HTML{
// 		*FS
// 		-generate an HTML file
// 			*CSS/Bootstrap
// 			-format HTML to display cleanly
// 		-HTML links to email addresses
// 			-mailto
// 		-GitHub link opens in new tab
// 			-target
// 	}HTML*

// 	-running the application on start command

// 	*Inquirer{
// 		-prompt for info
// 			-There is only one Team Manager
// 				-ask for name
// 				-ask for employee ID
// 				-ask for email address
// 				-ask for office number
// 			-Menu prompt to add more team members
// 				-Engineer
// 					-ask for name ..super
// 					-ask for ID ..super
// 					-ask for email ..super
// 					-ask for GitHub username
// 				-Intern
// 					-ask for name ..super
// 					-ask for ID ..super
// 					-ask for email ..super
// 					-ask for school
// 				-No new team members
// 					-generate the HTML with input
// 					-exit the app
// 	}Inquirer*
