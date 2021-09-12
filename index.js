
const fs = require('fs');
const inquirer = require('inquirer');


const questions = [
    {
        type: 'input',
        message: 'Enter your name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Where are you from?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Tell us about yourself',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'Enter your github URL:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Enter your linkedIn URL:',
        name: 'linkedin',
    },
   
    ];

function initialize () {inquirer
    .prompt(questions)
       .then(response => {
           var html = `<!DOCTYPE html>
           <html lang="en">
           
           <head>
               <meta charset="UTF-8">
               <meta http-equiv="X-UA-Compatible" content="IE=edge">
               <meta name="viewport" content="width=device-width, initial-scale=1.0">
               <title>My Portfolio</title>
               <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap" rel="stylesheet">
               <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
                   integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
               <link rel="stylesheet" href="style.css" />
           </head>
           
           <body>
               <header>
                   <nav class="navbar navbar-light bg-light">
                       <div class="container-fluid">
                           <a class="navbar-brand" href="#">
                               My Portfolio
                           </a>
                       </div>
                   </nav>
               </header>
               <main>
                   <div class="card" style="width: 18rem;">
                       <div class="card-header">
                           Hi, my name is ${response.name}
                       </div>
                       <ul class="list-group list-group-flush">
                           <li class="list-group-item">I'm from ${response.location}</li>
                           <li class="list-group-item">${response.bio}</li>
                           <li class="list-group-item"><a href="${response.github}">GitHub</a></li>
                           <li class="list-group-item"><a href="${response.linkedin}">LinkedIn</a></li>
                       </ul>
                   </div>
           
               </main>
           
           </body>
           
           </html>`
           fs.writeFile("index.html", html, (err) =>
         err ? console.log(err) : console.log('success')
         );
       }) 
         
        
};

