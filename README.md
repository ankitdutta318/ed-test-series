# ExamDelhi - Test Series API
### This repository contains API module for [ExamDelhi](examdelhi.com). The API online test series module.

### Technologies and Tools used:
* JavaScript
* [NodeJS](https://nodejs.org/) - Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side.
* [ExpressJS](https://expressjs.com/) - is a web application framework for Node.js
* [TypeScript](https://www.typescriptlang.org/) - TypeScript brings you optional static type-checking along with the latest ECMAScript features.
* [Gulp](http://gulpjs.com/) - Gulp is a toolkit for automating painful or time-consuming tasks in your development workflow
* [Mocha](https://mochajs.org/) - the fun, simple, flexible JavaScript test framework
* [Chai](http://chaijs.com/) - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

### The API consists of some basic routes (More routes will be added soon):
#### 1. Question Bank Routes
* POST /api/v1/qb               -   Add a new question to the Question Bank
* GET /api/v1/qb                -   Fetch all questions in the Questioin Bank from DB 
* GET /api/v1/qb/:id            -   Fetch a question from Question Bank by ID
* PATCH /api/v1/qb/:id          -   Edit a question in the Question Bank
* DELETE /api/v1/qb/:id         -   Delete a question from the Question Bank

#### 2. Test Series Routes
* POST /api/v1/tseries          -   Add a new Test to the Test Series
* GET /api/v1/tseries           -   Fetch all the Tests from the DB
* GET /api/v1/tseries/:id       -   Fetch a particular Test from DB by ID
* PATCH /api/v1/tseries/:id     -   Edit a Test
* DELETE /api/v1/tseries/:id    -   Delete a Test

### Contributors
* [Ankit Dutta](https://github.com/cruxbreaker)
* [Ashok Dey](https://github.com/ashokdey)
* [Priyanka Negi](https://github.com/pnegi)


## LICENSE

### The MIT License (MIT)
#### Copyright (c) 2017 Ankit Dutta

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.