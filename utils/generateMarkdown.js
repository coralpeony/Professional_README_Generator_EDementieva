// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
  
  ${data.badge}

## Description
  ${data.description}
  

## Table of Contents 
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)


## Installation:
  ${data.installation}


## Usage
  ${data.usage}
  

## License
This project is licensed under the ${data.license}
  * For more information, please refer to [https://choosealicense.com/](https://choosealicense.com/).


## Contributing
  ${data.contributing}


## Tests
To run tests, run the following command: ${data.tests}


## Questions
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at ${data.gitHub}.
* GitHub Username: ${data.gitHub}
* GitHub Email: ${data.email}

`;
}

module.exports = generateMarkdown;
