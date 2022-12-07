// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is the title of your project",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a description of the project",
    name: "description",
  },
  {
    type: "input",
    message: "List your table of contents",
    name: "table of contents",
  },
  {
    type: "input",
    message: "Provide a description of how to install this app",
    name: "install",
  },
  {
    type: "input",
    message: "Add the name of the screenshot of the project",
    name: "imageUrl",
  },
  {
    type: "input",
    message: "How do you use this application?",
    name: "usage",
  },

  {
    type: "list",
    message: "What license are you using for this project?",
    name: "license",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "none",
    ],
  },
  {
    type: "input",
    message: "How does someone contribute to this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your github profile name?",
    name: "questions1",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "questions2",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log(responses);
    writeToFile("./dist/readMe.md", generateMarkdown({ ...responses }));
  });
}

// Function call to initialize app
init();

//return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
//https://www.markdownguide.org/cheat-sheet/
