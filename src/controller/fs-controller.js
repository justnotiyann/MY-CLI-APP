const fs = require("fs");
const { dirname } = require("path");
const appDir = dirname(require.main.filename);
console.log(appDir);

const dir = `./app/api`;

// create file
const nameFilesFs = (path, name, extension) => {
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
const createFileFs = (folderPath, folderName) => {
  const extensions = ["controller", "services", "routes"];
  extensions.forEach((extension) => {
    nameFilesFs(folderPath, folderName, extension);
  });
};

//
const createFolderFs = (folderName) => {
  const folderPath = `${dir}/${folderName}`;
  // Lakukan percabangan jika tidak terdapat folder tersebut maka akan membuat folder tersebut
  if (!fs.existsSync(`${dir}/${folderName}`)) {
    // Create folder
    fs.mkdirSync(`${dir}/${folderName}`, { recursive: true });

    // confirm
    console.log("Created !");

    // create file controller,routes,services
    createFileFs(folderPath, folderName);
  }
};

module.exports = {
  nameFilesFs,
  createFileFs,
  createFolderFs,
};
