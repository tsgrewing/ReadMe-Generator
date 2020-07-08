var inquirer = require("inquirer");
var axios = require("axios");
const fs = require("fs");

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
        message: "List any contributors on this project(separate contributors with a comma. If there are no contributors type 'none'.).",
        name: "contributors",
        default: 'none'
        },
        {
        type: "input",
        message: "How should tests be run on your project?",
        name: "testing",
        default: "Enter testing instructions here."
        },


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
