'use strict';

// import the needed node_modules.
const express = require('express');
const morgan = require('morgan');

// We need to "require" the files whose content we reference in this file.
const exercisesP1 = require('./__workshop/exercisesP1');

const q6 = (req, res) => res.render('pages/question6', {questionNum: exercisesP1.questionNum(req)});
const q7 = (req, res) => res.render('pages/question7', {questionNum: exercisesP1.questionNum(req)});
const q8 = (req, res) => res.render('pages/question8', {questionNum: exercisesP1.questionNum(req)});
const q9 = (req, res) => res.render('pages/question9', {questionNum: exercisesP1.questionNum(req)});
const q10 = (req, res) => res.render('pages/question10', {questionNum: exercisesP1.questionNum(req)});

express()
  // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
  .use(morgan('tiny'))
  // Any requests for static files will go into the public folder
  .use(express.static('public'))
  // We are using ejs as our templating engine. see https://ejs.co/
  .set('view engine', 'ejs')

  // endpoints
  .get('/question1', exercisesP1.q1)
  .get('/question2', exercisesP1.q2)
  .get('/question3', exercisesP1.q3)
  .get('/question4', exercisesP1.q4)
  .get('/question5', exercisesP1.q5)
  .get('/question6', q6)
  .get('/question7', q7)
  .get('/question8', q8)
  .get('/question9', q9)
  .get('/question10', q10)
  .get('/bacon', (req, res) => res.send('It\'s a proven fact that all plans involving bacon have a 90 percent better chance of working out. '))
  
  // this serves up the homepage
  .get('/', (req, res) => {
    res.render('pages/homepage');
  })

  // this is our catch all endpoint. If a user navigates to any endpoint that is not
  // defined above, they get to see our 404 page.
  .get('*', (req, res) => {
    res.status(404);
    res.render('pages/fourOhFour');
  })

  // Node spins up our server and sets it to listen on the PORT we defined above.
  .listen(4000, () => console.log(`Listening on port 4000`));
