// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
    license = "";
  }
  else{
    license = ![GitHub license](https://img.shields.io/badge/license--blue.svg)
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({
  title,
  description,
  installation,
  imageUrl,
  usage,
  license,
  contributing,
  tests,
  questions1,
  questions2,
}) =>

` 
  # ${title}

${license}


## Description

 ${description}


## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

[License](#license)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions) 


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

- ${questions1}
- ${questions2}

`;


module.exports = generateMarkdown;
