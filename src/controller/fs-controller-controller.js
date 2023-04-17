const fs = require("fs");
const dir = `./app/api`;

// create file
const createFileName = (path, name, extension) => {
  fs.appendFile(
    // Bisa buat untuk folder/name/name/nested.js
    `${path}/${name}.${extension}.js`,
    "// welcome",
    function (err) {
      if (err) throw err;
    }
  );
};

// create 3 file : routes,controller,services
const createFileNameWithNames = (folderPath, folderName) => {
  const extensions = ["controller", "services", "routes"];
  extensions.forEach((extension) => {
    createFileName(folderPath, folderName, extension);
  });
};

//
const createFolderController = (folderName) => {
  const folderPath = `${dir}/${folderName}`;
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    createFileNameWithNames(folderPath, folderName);
    return console.log("Created");
  }
  return console.log("Already exist");
};

module.exports = {
  createFileName,
  createFileNameWithNames,
  createFolderController,
};
