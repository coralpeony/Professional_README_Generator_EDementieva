const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFile = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHub",
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
      "No license",
    ],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?",
    name: "installation",
  },
  {
    type: "input",
    message: "What command should be run to run tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "usage",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
];

// function to write README file
//function writeToFile(fileName, data) {}

// function to write README file and initialize program 
function init() {
  inquirer
    .prompt(questions)
    .then((response) =>
      writeFile("./dist/README.md", generateMarkdown(response))
    )
    .then(() => console.log("Successfully wrote to README.md"))
    .catch((err) => console.error(err));
}

// function call to initialize program
init();

