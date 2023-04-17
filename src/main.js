#!/usr/bin/env node
const inquirer = require("inquirer");
const { createFolderFs } = require("./controller/fs-controller");
const { questions } = require("./controller/inquirer.controller");

const createApi = inquirer.prompt(questions).then((answers) => {
  const { action, action_name } = answers;
  switch (action) {
    case "controller":
      createFolderFs(action_name);
      break;

    case "model":
      console.log("Masuk ke Membuat model");
      break;

    default:
      console.log(result);
      console.log("Masuk ke Default");
      break;
  }
});

module.exports = createApi;
