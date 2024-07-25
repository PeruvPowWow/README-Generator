// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GNU', 'Apache 2.0', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
];

function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, please open an issue or contact [${data.github}](https://github.com/${data.github}) at ${data.email}.
    `;
  }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writerFilesync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
