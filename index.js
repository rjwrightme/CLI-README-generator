// Require modules
const inquirer = require("inquirer");
const fs = require("fs");

// README Inquirer questions
inquirer
    .prompt([
    {
        type: 'checkbox',
        name: 'settings',
        message: 'What elements would you like in your README?',
        choices: [
          'Title', 'Description', 'Table of Contents', 'Install Instructions', 'Usage Instructions', 'License', 'Contribution Instructions', 'Screenshots', 'Testing Instructions', 'FAQ', 'Contact Info',
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
        default: 'Repo Title Goes Here',
        when: (answers) => answers.settings.includes('Title'),
      },
      {
        type: 'input',
        name: 'readmeDescription',
        message: 'What is your README description?',
        default: 'Repo description goes here',
        when: (answers) => answers.settings.includes('Description'),
      },
      {
        type: 'input',
        name: 'install01',
        message: 'Install instructions step 1. (If you have a code block example, save it for the next step.',
        default: 'Install instructions go here',
        when: (answers) => answers.settings.includes('Install Instructions'),
      },
      {
        type: 'input',
        name: 'install01code',
        message: 'Have example code to show? Add it here. We\'ll format it for you. If not, just hit Enter.',
        default: 'const exampleCode = "goes here"',
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
        default: 'Install instructions go here',
        when: (answers) => answers.install02confirm,
      },
      {
        type: 'input',
        name: 'install02code',
        message: 'Have example code to show? Add it here. We\'ll format it for you. If not, just hit Enter.',
        default: 'const exampleCode = "goes here"',
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
        default: 'Install instructions go here',
        when: (answers) => answers.install03confirm,
      },
      {
        type: 'input',
        name: 'install03code',
        message: 'Have example code to show? Add it here. We\'ll format it for you. If not, just hit Enter.',
        default: 'const exampleCode = "goes here"',
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
        default: 'Install instructions go here',
        when: (answers) => answers.install04confirm,
      },
      {
        type: 'input',
        name: 'install04code',
        message: 'Have example code to show? Add it here. We\'ll format it for you. If not, just hit Enter.',
        default: 'const exampleCode = "goes here"',
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
        default: 'Install instructions go here',
        when: (answers) => answers.install05confirm,
      },
      {
        type: 'input',
        name: 'install05code',
        message: 'Have example code to show? Add it here. We\'ll format it for you. If not, just hit Enter.',
        default: 'const exampleCode = "goes here"',
        when: (answers) => answers.install05confirm,
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are your instructions for using your repo?',
        when: (answers) => answers.settings.includes('Usage Instructions'),
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license do you want to use for your repo?',
        choices: ['MIT', 'Apache 2.0', 'GNU General Public License 3.0', 'The Unlicense'],
        default: 'MIT',
        when: (answers) => answers.settings.includes('License'),
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'What are your instructions for contributors to your repo?',
        default: `Any contributions you make are **greatly appreciated**. Just make sure to create a new branch first.
        
        1. Fork the Project
        2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
        3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
        4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
        5. Open a Pull Request`,
        when: (answers) => answers.settings.includes('Contribution Instructions'),
      },
      {
        type: 'input',
        name: 'screenshots',
        message: 'Please enter the relative path to your screenshots. If you have multiples, separate each one with a comma. Eg ./screenshots/image01.png, ./screenshots/image02.png',
        when: (answers) => answers.settings.includes('Screenshots'),
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What are your instructions for running tests?',
        when: (answers) => answers.settings.includes('Testing Instructions'),
      },
      {
        type: 'input',
        name: 'faq',
        message: 'List your FAQs with corresponding answers',
        when: (answers) => answers.settings.includes('FAQ'),
      },
      {
        type: 'checkbox',
        name: 'contact',
        message: 'What contact info would you like to provide?',
        choices: [
          'Name', 'email', '@Twitter', 'LinkedIn URL',
        ],
        when: (answers) => answers.settings.includes('Contact Info'),
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        when: (answers) => {
            if (answers.settings.includes('Contact Info')) {
                if (answers.contact.includes('Name')) {
                    return true;
                }
            }
            
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        when: (answers) => {
            if (answers.settings.includes('Contact Info')) {
                if (answers.contact.includes('email')) {
                    return true;
                }
            }
            
        }
      },
      {
        type: 'input',
        name: 'twitter',
        message: 'What is your Twitter handle?',
        when: (answers) => {
            if (answers.settings.includes('Contact Info')) {
                if (answers.contact.includes('@Twitter')) {
                    return true;
                }
            }
            
        }
      },
      {
        type: 'input',
        name: 'linkedIn',
        message: 'What is your LinkedIn URL?',
        when: (answers) => {
            if (answers.settings.includes('Contact Info')) {
                if (answers.contact.includes('LinkedIn URL')) {
                    return true;
                }
            }
            
        }
      },
    ])
    .then( answers => buildReadme(answers))
    .catch( error => console.error(error));

// Generate README file
function buildReadme(info) {
console.log(info);
}