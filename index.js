// Require modules
const inquirer = require("inquirer");
const fs = require("fs");

// Questions for README Generator
/*
1. What is the title of your README?
2. Write a short description.
3. Table of Contents
4. Installation instructions
5. Usage instructions
6. Select a license for your repo
7. Instructions for contributing to the project
7a Screenshots
8. Tests
9. Questions
10. LinkedIn url

*/

// README settings
inquirer
    .prompt([
    {
        type: 'checkbox',
        name: 'settings',
        message: 'What elements would you like in your README?',
        choices: [
          'Title', 'Description', 'Table of Contents', 'Install Instructions', 'License', 'Contribution Instructions', 'Screenshots', 'Testing Instructions', 'Questions', 'LinkedIn URL',
        ],
      },
      {
        type: 'input',
        name: 'fileName',
        message: 'Output filename?',
        default: 'README.md',
      },
      {
        type: 'input',
        name: 'filePath',
        message: 'Output filepath?',
        default: './output/',
      },
      {
        type: 'input',
        name: 'readmeTitle',
        message: 'What is your README title?',
        when: (answers) => answers.settings.includes('Title'),
      },
      {
        type: 'input',
        name: 'readmeDescription',
        message: 'What is your README description?',
        when: (answers) => answers.settings.includes('Description'),
      },
      {
        type: 'input',
        name: 'install01',
        message: 'Install instructions step 1. (If you have a code block example, save it for the next step.',
        when: (answers) => answers.settings.includes('Install Instructions'),
      },
      {
        type: 'input',
        name: 'install01code',
        message: 'Have example code to show? Add it here. We\'ll format it for you. If not, just hit Enter.',
        when: (answers) => answers.settings.includes('Install Instructions'),
      },
      {
        type: 'confirm',
        name: 'install02confirm',
        message: 'Is there another step to installing your project?',
        when: (answers) => answers.install01,
      },
      {
        type: 'input',
        name: 'install02',
        message: 'Install instructions step 2. (If you have a code block example, save it for the next step.',
        when: (answers) => answers.install02confirm,
      },
      {
        type: 'input',
        name: 'install02code',
        message: 'Have example code to show? Add it here. We\'ll format it for you. If not, just hit Enter.',
        when: (answers) => answers.install02confirm,
      },
      {
        type: 'confirm',
        name: 'install03confirm',
        message: 'Is there another step to installing your project?',
        when: (answers) => answers.install02confirm,
      },
      {
        type: 'input',
        name: 'install03',
        message: 'Install instructions step 3. (If you have a code block example, save it for the next step.',
        when: (answers) => answers.install03confirm,
      },
      {
        type: 'input',
        name: 'install03code',
        message: 'Have example code to show? Add it here. We\'ll format it for you. If not, just hit Enter.',
        when: (answers) => answers.install03confirm,
      },
      {
        type: 'confirm',
        name: 'install04confirm',
        message: 'Is there another step to installing your project?',
        when: (answers) => answers.install03confirm,
      },
      {
        type: 'input',
        name: 'install04',
        message: 'Install instructions step 4. (If you have a code block example, save it for the next step.',
        when: (answers) => answers.install04confirm,
      },
      {
        type: 'input',
        name: 'install04code',
        message: 'Have example code to show? Add it here. We\'ll format it for you. If not, just hit Enter.',
        when: (answers) => answers.install04confirm,
      },
      {
        type: 'confirm',
        name: 'install05confirm',
        message: 'Is there another step to installing your project?',
        when: (answers) => answers.install04confirm,
      },
      {
        type: 'input',
        name: 'install05',
        message: 'Install instructions step 5. (If you have a code block example, save it for the next step.',
        when: (answers) => answers.install05confirm,
      },
      {
        type: 'input',
        name: 'install05code',
        message: 'Have example code to show? Add it here. We\'ll format it for you. If not, just hit Enter.',
        when: (answers) => answers.install05confirm,
      },
    ])
    .then( answers => console.log(answers));


// function buildReadme(info) {

// }