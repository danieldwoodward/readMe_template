// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return ` 
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



`;
}

module.exports = generateMarkdown;