#!/usr/bin/env node
const inquirer = require("inquirer");
const {
  createFolderController,
} = require("./controller/fs-controller-controller");
const { createModelFile } = require("./controller/fs-model-controller");
const { questions } = require("./controller/inquirer.controller");

const createApi = inquirer.prompt(questions).then((answers) => {
  const { action, action_name } = answers;
  switch (action) {
    case "controller":
      createFolderController(action_name);
      break;

    case "model":
      createModelFile(action_name);
      break;

    default:
      console.log("Masuk ke Default");
      break;
  }
});

module.exports = createApi;
