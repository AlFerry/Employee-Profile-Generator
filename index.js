// Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const fs = require('fs');

//create const to build team
const manager = [
    {
        type: "input",
        name: "manager",
        message: "What is the team manager's name?",
    },
    {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
    },
    {
        type: "input",
        name: "managerOffice",
        message: "What is the team manager's office number?",
    },
    
]

//  Actions need

// Ask them for manager info

    // Prompt the user for the data

        // THEN create and store an object for the Manager

        // THEN "Ask what they want to do next"

// Ask them for engineer info

    // Prompt the user for the data

        // THEN create and store an object for the Engineer

        // THEN "Ask what they want to do next"

// Ask them for intern info

    // Prompt the user for the data

        // THEN create and store an object for the intern

        // THEN "Ask what they want to do next"

// Ask them what they would like to do next

    // Add Engineer, Add Intern, Be Done

        // IF 'Add Engineer' -> 'Ask them for engineer info'

        // IF 'Add Intern' -> 'Ask them for intern info'

        // IF 'Be done' -> 'build an html page'

// Use all of the collected employee data to build an html page
