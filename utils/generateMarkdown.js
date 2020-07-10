// function to generate markdown for README
function generateMarkdown(data) {
  let licenseBadge = () => {
    if (data.license === 'MIT') {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    else if (data.license === 'Mozilla') {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else if (data.license === 'GPL v3') {
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    else if (data.license === 'Unilicense') {
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }
    else if (data.license === 'WTFPL') {
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    }    
  };

  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  [Installation](#Installation)

  [Usage](#Usage)

  [License](#License)

  [Contributing](#Contributing)

  [Tests](#Tests)

  [Questions](#Questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.testing}
  
  ## Questions 
  GitHub Profile: [${data.username}](http://github.com/${data.username})
  Please email me at ${data.questions} with additional questions.
  
  ## License
  `
  ;
}

module.exports = generateMarkdown;
