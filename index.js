const inquirer = require("inquirer");
const fs = require('fs');
const { Circle } = require("./lib/shape");

const questions = [
    {
        message: "What text would you like in your svg?",
        name: "bestTextEver",
        type: "input"
    },
    {
        message: "What text color would you like in your svg?",
        name: "bestTextColor",
        type: "input"
    },
    {
        message: "What shape would you like in your svg?",
        name: "bestShape",
        type: "list",
        choices: ['Triangle', 'Square', 'Circle']
    },
    {
        message: "What shape color would you like in your svg?",
        name: "bestShapeColor",
        type: "input"
    },
]

function beginEverything() {
    inquirer.prompt(questions)
    .then(answersObj => {
        let templateForBestSvgEver = ""

        if(answersObj.bestShape === 'Circle') {
            const newShape = new Circle(answersObj.bestTextEver, answersObj.bestTextColor, answersObj.bestShapeColor);
            templateForBestSvgEver = newShape.render()
        }

      fs.writeFile('./examples/logo.svg', templateForBestSvgEver, (err) => {
        if(err) throw err;
        console.log("Generated logo.svg")
      })
    })
}

beginEverything()