var inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
        },
        {
        type: "input",
        message: "What is your GitHub repository name for this project? (please make sure to enter this exactly as it is on GitHub)",
        name: "repoName"
        },
        {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "Enter project title here."
        },
        {
        type: "input",
        message: "Describe your project.",
        name: "description",
        default: "Enter project description here."
        },
        {
        type: "input",
        message: "Enter the relative path of your demo, .gif or .png.",
        name: "demo",
        default: "Add project demo file here"
        },
        {
        type: "input",
        message: "How do users install your project?",
        name: "installation",
        default: "Enter installation instructions here."
        },
        {
        type: "input",
        message: "What are the usage instructions for your project?",
        name: "usage",
        default: "Enter usage instructions here."
        },
        {
        type: "input",
        message: "What are the guidelines for contributing to your project?",
        name: "contributing",
        default: "Enter contribution guidelines here."
        },
        {
        type: "input",
        message: "How should tests be run on your project?",
        name: "testing",
        default: "Enter testing instructions here."
        },
        {
        type: "list",
        message: "What type of license is this project covered under?",
        choices: ["MIT", "GPL v3", "Mozilla", "Unlicense", "WTFPL"],
        name: "license",
        default: "MIT"
        },
        {
        type: "input",
        message: "What is your email address?",
        name: "questions",
        default: "ENTER EMAIL ADDRESS HERE"
        }, 
        {
        type: "type",
        message: "Please include the full links to any badges you would like to add to your readme in addition to the most recent commit badge. Format should be ![badge type](badge url)", 
        name: "badges"
        }
];

function promptUser() {
        return inquirer.prompt(questions)
};

// function to write README file
// function writeToFile('ReadMe.md', ) {
// }

// function to initialize program
async function init() {
        try {
          const answers = await promptUser();
      
          const readMe = generateMarkdown(answers);
      
          await writeFileAsync("ReadMe.md", readMe);
      
          console.log("Successfully wrote to ReadMe.md");
        } catch(err) {
          console.log(err);
        }
      }

// function call to initialize program
init();
