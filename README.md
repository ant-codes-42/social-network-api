# Candidate Search

## Description

This server application utilizes the Mongoose ODM to provide a REST API for a mock social media network.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

1. Clone this repo utilizing the green `<> Code` button to the folder of your choice. Optionally, download the source.

2. Run 'npm i' to initialize and download dependencies. You will need Node.js which can be acquired from the [Node.js website.](https://nodejs.org)

3. Run 'npm run build' followed by 'npm run start' to initialize the server. If successful, you will see a console message stating 'Server is running on http://localhost:3001'.

4. Utilize a tool such as Postman or Insomnia to interact with the API.

## Usage

[Here is a video walkthrough of the application.](https://youtu.be/gzal4JrCF5M)

There are two main routes, /api/users and /api/thoughts.

### /api/users

GET request - Will return all users data
POST request - Create a new user
- Expected format:
{
    "username": "<username in string format>",
    "email": "<a formatted email address>"
}

### /api/users/:id

GET request - Get a single user by ID and return JSON data
PUT request - Update a single user by ID
- Options:
{
    "username":
    "email":
}
DELETE request - Delete a user by ID

### /api/users/:userId/friends/:friendId

POST request - Add a new friend to a user's friend list
DELETE request - Remove a friend from a user's friend list

### /api/thoughts

GET request - Get all thoughts data
POST request - Create a new thought
- Expected format:
{
    "thoughtText": "<string, min 1 char, max 280>",
    "username": "<string>"
}

### /api/thoughts/:id

GET request - Get a single thought by ID and return as JSON
PUT request - Update a thought by ID
Options:
{
    "thoughtText": "<string, min 1 char, max 280>",
    "username": "<string>"
}
DELETE request - Delete a thought by ID

### /api/thoughts/:thoughtId/reactions

POST request - Add a new reaction to a thought
{
    "reactionBody": "<string, min 1 char, max 280>",
    "username": "<string>"
}

### /api/thoughts/:thoughtId/reactions/:reactionId

DELETE request - Remove a reaction from a thought by ID

## Contribute

[Please check out the repo here!](https://github.com/ant-codes-42/social-network-api)

## Questions

The author maintains a [GitHub account here](https://github.com/ant-codes-42).

## License

This work is licensed under the MIT License.

Copyright 2025 Anthony Schwab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.
