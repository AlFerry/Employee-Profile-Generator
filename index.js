// Include packages needed for this application
const Manager = require('./lib/Manager');

//create const to build team, use employee( array of objects ) to build html page
const employees = [];


//  Actions need

// Ask them for manager info

    // Prompt the user for the data

        // THEN create and store an object for the Manager
        employees.push( new Manager( /*Pas in data from);
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
