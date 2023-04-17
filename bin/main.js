#!/usr/bin/env node
const inquirer=require("inquirer"),createFolderController=require("./controller/fs-controller-controller")["createFolderController"],createModelFile=require("./controller/fs-model-controller")["createModelFile"],questions=require("./controller/inquirer.controller")["questions"],createApi=inquirer.prompt(questions).then(e=>{var{action:e,action_name:r}=e;switch(e){case"controller":createFolderController(r);break;case"model":createModelFile(r);break;default:console.log("Masuk ke Default")}});module.exports=createApi;