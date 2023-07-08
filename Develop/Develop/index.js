// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
const inquirer = require('inquirer');
const fs = require('fs');

        const questions = [{
            type: 'input',
            message: "What is the title of this project?",
            name: 'title',
        },

        {
            type: 'input',
            message: "Describe how this project functions",
            name: 'description',
        },

        {
            type: 'input',
            message: "Provide a link to the deployed application",
            name: 'deployedlink',
        },
        {
            type: 'input',
            message: "Attach a screenshot of the deployed project",
            name: 'Screenshot',
        },
        {
            type: 'input',
            message: "What technologies are used in this project?",
            name: 'BuiltWith',
        },
        {
            type: 'input',
            message: "What type of license are you using for this project?",
            name: 'License',
        },
        {
            type: 'input',
            message: "What year was this created?",
            name: 'Year',
        },
        {
            type: 'input',
            message: "Who is/are the creator(s)?",
            name: 'Name',
        }];

function renderLicenseBadge(license) {
if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
}
if (license === "Apache2.0"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}
if (license === "GPL3.0"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
}
if (license === "BSD3"){
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
}
if (license === "None"){
    return ""
}


}
function writeReadMeFile() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data)
            fs.writeFile("README.md", createReadme(data), (err) =>
                err ? console.log(err) : console.log("Enjoy your README"))
        });
};

function createReadme(data) {
    return ` ## ${data.title}



## Table Of Contents:
* [Description Of Functionality](#Description)

* [Link To Deployed Application](#Link)

* [ScreenShot of Deployed Application](#ScreenShot)

* [Link To Deployed Application](#Link)

* [Built With](#Built)

* [License](#License)

* [Creator](#Creator)




## Description Of Functionality:
${data.description}

## Link To Deployed Application:

Link:  ${data.deployedlink}


## ScreenShot of Deployed Application:

Link: ${data.Screenshot}

## Built With:
-${data.BuiltWith}

## License:
This Project is licensed under: ${renderLicenseBadge(data.License)}

Copyright (c) ${data.Year} ${data.Name}


## Creator:
${data.Name}



`
}
writeReadMeFile();