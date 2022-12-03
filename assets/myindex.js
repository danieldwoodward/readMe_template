const inquirer = require("inquirer");
const fs = require("fs");

const generateReadMe = ({
  title,
  description,
  tableOfContents,
  installation,
  imageUrl,
  usage,
  license,
  contributing,
  tests,
  questions,
}) =>
  ` 

  # ${title}

[![License: ${license}](https://img.shields.io/badge/License-${license}-lightgrey.svg)]

## Description

 ${description}


## Table of Contents

${tableOfContents}

## Installation

${installation}

## Usage

${usage}

Provide instructions and examples for use. Include screenshots as needed.

![alt text](images/${imageUrl})

## License

${license}

## Contributing

${contributing}

## Tests 

${tests}

## Questions

${questions}


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
      choices: ['Apache License 2.0',
      'GNU General Public License v3.0',
      'MIT License',
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      'Boost Software License 1.0',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public License 2.0',
      'GNU Affero General Public License v3.0',
      'GNU General Public License v2.0',
      'GNU Lesser General Public License v2.1',
      'Mozilla Public License 2.0',
      'The Unlicense']
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
      message: "",
      name: "question",
    },
  ])

  .then((answers) => {
    const readMePageContent = generateReadMe(answers);

    fs.writeFile("readMe.md", readMePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created readMe.md!")
    );
  });