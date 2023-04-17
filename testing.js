const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      name: "folderName",
      message: "Mau buat folder file apa ?",
      choices: ["controller", "model"],
    },
  ])
  .then((answers) => {
    const result = answers.folderName;
    switch (result) {
      case "controller":
        console.log("Masuk ke Membuat controller");
        break;

      case "model":
        console.log("Masuk ke Membuat model");
        break;

      default:
        console.log(result);
        console.log("Masuk ke Default");
        break;
    }
    // console.info("Answer:", answers.reptile);
  });
