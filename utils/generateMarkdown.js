// function for badges based on license selection.
function badge(value) {
  if (value === "Apache License 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (value === "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else if (value === "Eclipse Public License 2.0") {
    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
  } else if (value === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else {
    return "";
  }
}

function link(value) {
  if (value === "No license") {
    return "";
  } else {
    return `3. [License](#license)`;
  }
}

function section(value) {
  if (value === "No license") {
    return "";
  } else {
return `## License
This project is licensed under the ${value}
  * For more information, please refer to [https://choosealicense.com/](https://choosealicense.com/).`
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  //console.log(data);
  return `
# ${data.title}
  
  ${badge(data.license)}

## Description
  ${data.description}
  


## Table of Contents 
1. [Installation](#installation)
2. [Usage](#usage)
  ${link(data.license)}
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)



## Installation:
To install necessary dependencies, run the following command: ${data.installation}



## Usage
You can use this applicaiton by running ${data.usage}

  
  ${section(data.license)}



## Contributing
  ${data.contributing}



## Tests
To run tests, run the following command: ${data.tests}



## Questions
If you have any questions about the repo, open an issue or contact me directly at ${
    data.email
  }. You can find more of my work at ${data.gitHub}.
* GitHub Username: ${data.gitHub}
* GitHub Email: ${data.email}
`;
}

module.exports = generateMarkdown;
