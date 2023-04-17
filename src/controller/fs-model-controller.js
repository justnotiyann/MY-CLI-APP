const fs = require("fs");

const createModelFileName = (dir, model_name) => {
  fs.appendFile(`${dir}/${model_name}.model.js`, "// Model ", function (err) {
    if (err) throw err;
    return console.log("File is created successfully.");
  });
};

const createModelFile = (model_name) => {
  const dir = `./app/models`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    return createModelFileName(dir, model_name);
  }
  return createModelFileName(dir, model_name);
};

module.exports = { createModelFile };
