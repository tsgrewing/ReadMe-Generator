// function to generate markdown for README
function generateMarkdown(data) {
  let licenseInfo = "";
  let licenseName = data.license;
  let licenseBadge = (function() {
    if (licenseName === 'MIT') {
      licenseLink = "(https://opensource.org/licenses/MIT)";
      licenseInfo = `${licenseName} License, more information can be found [here]${licenseLink}.`;
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]${licenseLink}`;
    }
    else if (licenseName === 'Mozilla') {
      licenseLink = "(https://opensource.org/licenses/MPL-2.0)";
      licenseInfo =`${licenseName} License, more information can be found [here]${licenseLink}`;
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]${licenseLink}`;
    }
    else if (licenseName === 'GPL v3') {
      licenseLink = "(https://www.gnu.org/licenses/gpl-3.0)";
      licenseInfo =`${licenseName} License, more information can be found [here]${licenseLink}`;
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]${licenseLink}`;
    }
    else if (licenseName === 'Unlicense') {
      licenseLink = "(https://www.unlicense.org)";
      licenseInfo =`${licenseName}, more information can be found [here]${licenseLink}`;
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]${licenseLink}`;
    }
    else if (licenseName === 'WTFPL') {
      licenseLink = "(http://www.wtfpl.net/about/)"
      licenseInfo =`${licenseName}, more information can be found [here]${licenseLink}`;
      return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]${licenseLink}`;
    }    
  })();

  return `# ${data.title}
  ${licenseBadge} ![Last Commit](https://img.shields.io/github/last-commit/${data.username}/${data.repoName}) ${data.badges}

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
  This project is covered under the ${licenseInfo}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.testing}
  
  ## Questions 
  GitHub Profile: [${data.username}](http://github.com/${data.username})
  Please email me at ${data.questions} with additional questions.
  `
  ;
}

module.exports = generateMarkdown;
