# Repo Search

* This project allows you to search git repos by name

## Prerequisites

* In order to run this application you must provide it with a github personal access token.

* You can create one by visiting the following link:

`https://github.com/settings/tokens`

* Alternatively if you already have a token you can use that.

* Token is only use to authenticate graphql requests and is not stored.
## Installation

* Clone the repo
* cd into the directory
* execute the following commands (If you do not have nvm you can skip the step, it ensures you are using the correct version of node for the project):

```shell script
nvm use
npm install
```

## To Run

* From the root directory of the project run the following commands:
* Note that you should replace YOUR-GITHUB-TOKEN with your own personal access token
```shell script
REACT_APP_GITHUB_TOKEN=<YOUR-GITHUB-TOKEN> npm run start
```

Navigate to `http://localhost:3000`

## Tests

* To run unit tests:
```shell script
npm run test
```