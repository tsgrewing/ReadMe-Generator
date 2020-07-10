# ReadMe Generator

  ## Description
  A CLI program to generate a good ReadMe for projects. The generated ReadMe should include a title, description, clickable table of contents, and sections for usage, contributing, testing, and licensing info. There will also be instructions for contacting the project creator with questions, and the option to add badges to the bottom of the readme.
  
  ## Table of Contents
  [Installation](#Installation)

  [Usage](#Usage)

  [License](#License)

  [Contributing](#Contributing)

  [Tests](#Tests)

  [Questions](#Questions)
  
  ## Installation
  Clone or fork the repo, and  run npm install
  
  ## Usage
  After installation run index.js and answer the questions. After all the questions have been answered "ReadMe.md" will be created and poplulated with their answers.
  
  ## License
  WTFPL
  
  ## Contributing
  undefined
  
  ## Tests
  Run the program from the command line
  
  ## Questions 
  GitHub Profile: [tsgrewing](http://github.com/tsgrewing)
  Please email me at tsgrewing@gmail.com with additional questions.
  
  ## License
  () => {
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
  }
  