# QA Challenge
## Prerequisites
1. NodeJS
2. Yarn
### Installation
1. NodeJS
    * through NVM (Node Version Manager) ***(recommended)***
      * Windows:
          https://github.com/coreybutler/nvm-windows#install-nvm-windows
      * Linux:
          https://github.com/nvm-sh/nvm#about

    * through the website (version 14.17.3):
      * https://nodejs.org/en/download/releases/
    * to verify that you have NodeJS installed, run `node -v` and `npm -v` to show the version installed (should be at least v15.x.x for NodeJS and 7.x.x for npm)
2. Yarn

    ```
    npm install --global yarn
    ```
   * to verify that you have Yarn installed, run `yarn -v` to show the version installed (should be at least 1.2x.x)
## Configuration
### Dependencies
1. In the root of the webapp directory, run the following command to install all the dependencies necessary to run the web app.

    ```
    yarn
    ```
## Getting Started
### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.