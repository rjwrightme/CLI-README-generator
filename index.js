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
        message: 'Please enter the relative path to your screenshots. If you have multiples, separate each one with a comma.',
        default: '../screenshots/image01.png,../screenshots/image02.png',
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
// 'Title', 'Description', 'Table of Contents', 'Install Instructions', 'Usage Instructions', 'License', 'Contribution Instructions', 'Screenshots', 'Testing Instructions', 'FAQ', 'Contact Info',
function buildReadme(info) {
// console.log(info);
let readmeData = '';
if(info.settings.includes('License')) {
    readmeData += licenseBadge(info.license);
}
if(info.settings.includes('Title')) {
    readmeData += `\n# ${info.readmeTitle}\n`;
}
if(info.settings.includes('Description')) {
    readmeData += `${info.readmeDescription}\n`;
}
if (info.settings.includes('Table of Contents')) {
    readmeData += buildToC(info);
}
if(info.settings.includes('Install Instructions')) {
    readmeData += buildInstallInstructions(info);
}
if(info.settings.includes('Usage Instructions')) {
    readmeData += `## Usage\n${info.usage}\n`;
}
if(info.settings.includes('License')) {
    readmeData += buildLicense(info.license);
}
if(info.settings.includes('Contribution Instructions')) {
    readmeData += `## Contributing\n${info.contributors}\n`;
}
if(info.settings.includes('Screenshots')) {
    readmeData += buildScreenshots(info.screenshots);
}
saveReadme(readmeData, info.fileName, info.filePath);
}

function licenseBadge(license) {
    switch (license) {
        case 'MIT':
            return '[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)';
        case 'Apache 2.0':
            return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=flat-square)](https://opensource.org/licenses/Apache-2.0)';
        case 'GNU General Public License 3.0':
            return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-yellow.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)';
        case 'The Unlicense':
            return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-brightgreen.svg?style=flat-square)](http://unlicense.org/)';
    }
}

function buildLicense(license) {
    let licenseSection = `## License\n`;
    licenseSection += `Distributed under the ${license} License. See \`LICENSE\` for more information.\n`;
    licenseSection += licenseBadge(license) + '\n';
    return licenseSection;
}

function buildInstallInstructions(info) {
    let installInstructions = `## Installation\n`;
    for (let i = 1; i <= 6; i++) {
        if (info["install0"+i]) {
            installInstructions += `${i}. ${info["install0"+i]}\n`;
            if (info["install0"+i+"code"]) {
                installInstructions += "```\n" + info["install0"+i+"code"] + "\n```\n";
            }
        } else {
            return installInstructions;
        }
    }
}

function buildScreenshots(screenshots) {
    const imgArray = screenshots.split(',');
    let screenshotCode = '## Screenshots\n';
    for (let i = 0; i < imgArray.length; i++) {
        screenshotCode += `![Screen Shot 0${i+1}](${imgArray[i]})\n`;
    }
    return screenshotCode;
}

// Build Table of Contents
function buildToC(info) {
    let tableOfContents = `## Table of Contents\n`;
    if (info.settings.includes('Install Instructions')) {
        tableOfContents += `- [Installation](#installation)\n`;
    }
    if (info.settings.includes('Usage Instructions')) {
        tableOfContents += `- [Usage](#usage)\n`;
    }
    if (info.settings.includes('License')) {
        tableOfContents += `- [License](#license)\n`;
    }
    if (info.settings.includes('Contribution Instructions')) {
        tableOfContents += `- [Contributing](#contributing)\n`;
    }
    if (info.settings.includes('Screenshots')) {
        tableOfContents += `- [Screenshots](#screenshots)\n`;
    }
    if (info.settings.includes('Testing Instructions')) {
        tableOfContents += `- [Tests](#tests)\n`;
    }
    if (info.settings.includes('FAQ')) {
        tableOfContents += `- [FAQ](#faq)\n`;
    }
    if (info.settings.includes('Contact Info')) {
        tableOfContents += `- [Contact](#contact)\n`;
    }
    return tableOfContents;
}

function saveReadme(readmeData, fileName, filePath) {
    console.log(readmeData);
    // Create file path if it doesn't already exist
    fs.mkdirSync(filePath, { recursive: true });
    
    // Write the file
    fs.writeFile(filePath + fileName, readmeData, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log(`Saved ${fileName} to ${filePath+fileName}`);
      });
}