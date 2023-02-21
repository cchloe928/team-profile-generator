const Engineer=require ('./lib/Engineer') 
const Intern=require ('./lib/Intern') 
const Manager=require ('./lib/Manager') 

const fs = require ('fs')
const inquirer = require ('inquirer')
const Employee = require('./lib/Employee')

const team = [] 
function managerQuestions () {
    inquirer.prompt (
        [
            {
                type: 'input', 
                message: 'What is your manager name?',
                name: 'name'
            },
            {
                type: 'input', 
                message: 'What is your manager id?',
                name: 'id'
            },
            {
                type: 'input', 
                message: 'What is your manager email?',
                name: 'email',
            },
            {
                type: 'input', 
                message: 'What is your manager office number?',
                name: 'officeNumber'
            },
            {
                type: 'list', 
                message: 'would you like to put new employee?',
                name: 'newEmployee',
                choices: ['Engineer', 'Intern', 'Finish']
            }
        ]
    )
    .then (data=> {
        let employee=new Manager (data.name, data.id, data.email, data.officeNumber)
        team.push (employee)
        if (data.newEmployee=='Engineer') {
            engineerQuestions () 
        } else if (data.newEmployee=='Intern') {
            internQuestions ()
        }  else {
            buildTeam ()
        }
    })
}


function internQuestions () {
    inquirer.prompt (
        [
            {
                type: 'input', 
                message: 'What is your intern name?',
                name: 'name'
            },
            {
                type: 'input', 
                message: 'What is your intern id?',
                name: 'id'
            },
            {
                type: 'input', 
                message: 'What is your intern email?',
                name: 'email',
            },
            {
                type: 'input', 
                message: 'What is your intern school?',
                name: 'school'
            },
            {
                type: 'list', 
                message: 'would you like to put new employee?',
                name: 'newEmployee',
                choices: ['Engineer', 'Intern', 'Finish']
            }
        ]
    )
    .then (data=> {
        let employee=new Intern (data.name, data.id, data.email, data.school)
        team.push (employee)
        if (data.newEmployee=='Engineer') {
            engineerQuestions () 
        } else if (data.newEmployee=='Intern') {
            internQuestions ()
        }  else {
            buildTeam ()
        }
    })
}

function engineerQuestions () {
    inquirer.prompt (
        [
            {
                type: 'input', 
                message: 'What is your name?',
                name: 'name'
            },
            {
                type: 'input', 
                message: 'What is your id?',
                name: 'id'
            },
            {
                type: 'input', 
                message: 'What is your email?',
                name: 'email',
            },
            {
                type: 'input', 
                message: 'What is your github username?',
                name: 'github'
            },
            {
                type: 'list', 
                message: 'would you like to put new employee?',
                name: 'newEmployee',
                choices: ['Engineer', 'Intern', 'Finish']
            }
        ]
    )
    .then (data=> {
        let employee=new Engineer (data.name, data.id, data.email, data.github)
        team.push (employee)
        if (data.newEmployee=='Engineer') {
            engineerQuestions () 
        } else if (data.newEmployee=='Intern') {
            internQuestions ()
        }  else {
            buildTeam ()
        }
    })
}

function buildTeam () {
    fs.writeFileSync ('./dist/team.html', `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    `) 
    for (let i = 0; i < team.length; i++) {
        fs .appendFileSync ('./dist/team.html', `
        ${team[i].name}
        ${team[i].id}
        ${team[i].email}
        `)

    }
    fs .appendFileSync ('./dist/team.html', `
    </body>
    </html>
    `)
}
managerQuestions()