const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "gitHubName",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    {
      type: "input",
      message: "What is your project's name?",
      name: "title",
    },
    {
      type: "input",
      message: "Please write a short description of your project:",
      name: "description",
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: [
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          "Boost Software License 1.0",
          "Eclipse Public License 2.0",
          "Mozilla Public License 2.0",
        ],
      },
    {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "install",
    },
    {
      type: "input",
      message: "What command should be run to run tests?",
      name: "test",
    },
    {
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "instructions",
    },
    {
      type: "input",
      message: "What does the user need to know about contributing to the repo?",
      name: "contribute",
    },
  ];






// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer
.prompt(questions)
.then((response) => {
    console.log(response)
})
}

// function call to initialize program
init();
