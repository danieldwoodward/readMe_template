// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'none'){
    license = "";
  }
  else{
    license = `![GitHub ${license}](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return license;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'none'){
    return license = "";
  }
  else {
    return `[${license}](#license)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'none'){
    return license = "";
  }
  else{
    return `## License
    
    This project is licensed under ${license}`


  }
}

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

${renderLicenseBadge(license)}


## Description

 ${description}


## Table of Contents

[Description](#description)

[Installation](#installation)

[Usage](#usage)

${renderLicenseLink(license)}

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions) 


## Installation

${installation}

## Usage

${usage}

![alt text](/assets/images/${imageUrl})

${renderLicenseSection(license)}

## Contributing

${contributing}

## Tests 

${tests}

## Questions

- ${questions1}
- ${questions2}

`;


module.exports = generateMarkdown;
