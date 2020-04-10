const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
        type: "input",
        name: "project-title",
        }
    ]);

    function generateHTML(prompt) {
        return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        <header>${prompt.name}<header>
      </body>
      </html>`;
      }
      
      promptUser()
   .then(function(prompt) {
    const readMe = generateHTML(prompt);

    return writeFileAsync("index.html", readMe);
   });