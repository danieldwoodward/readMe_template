const inquirer = require("inquirer");
const fs = require("fs");

const generateReadMe = ({
  title,
  description,
  installation,
  imageUrl,
  credits,
  license,
}) =>
  ` # ${title}

## Description

 ${description}

## Installation

${installation}

## Usage

Provide instructions and examples for use. Include screenshots as needed.

    ![alt text](assets/images/${imageUrl})

## Credits

${credits}

## License

${license}
---`;

inquirer
.prompt([
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
    message: "Who else deserves credit for this project?",
    name: "credit",
  },

  {
    type: "input",
    message: "What license are you using for this project?",
    name: "license",
  },
])

.then((answers) => {
    const readMePageContent = generateReadMe(answers);

    fs.writeFile('readMe.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created readMe.md!')
    );
  });
