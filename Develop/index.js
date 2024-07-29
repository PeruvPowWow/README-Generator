// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const { error } = require('console');

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
        message: 'Provide instructions and examples for using your project:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GNU', 'Apache', 'None'],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writerFilesync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
    }).catch((error) => {
        console.log('Error during prompt:', error);
    });
}

// Function call to initialize app
init();
