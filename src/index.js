const { stringify } = require("querystring");
const {calPercentage, sum}=require("./helper.js");
const fs = require("fs")
const os = require('os');

//1
console.log("________ANS Q1_______")
const totalMemory = os.totalmem();
console.log(`Total system memory: ${totalMemory} bytes`);

//2
console.log("________ANS Q2_______")
const userInfo = os.userInfo();
const username = userInfo.username;
console.log(`Current username: ${username}`);

//3
const cpuArchitecture = os.arch();
console.log("________ANS Q3_______")
console.log(`Current CPU architecture: ${cpuArchitecture}`);

//4
console.log("________ANS Q4_______")
// const data ='data is added throught write'
// fs.writeFile("./src/file.json", data, 'utf8', (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
  
//     console.log('Data written to file successfully.');
//   });


fs.readFile("./src/file.json", 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });

  //5
  console.log("________ANS Q5_______")
if (fs.existsSync("./src/file.json")) {
  console.log('File or directory exists');
} else {
  console.log('File or directory does not exist');
}

//6
console.log("________ANS Q6_______")
fs.copyFile('/src/file.json', './src/destination/file.json', (err) => {
  if (err) {
    console.error('Error copying file:', err);
  } else {
    console.log('File copied successfully!');
  }
});



  // try {
  //   const data = fs.readFileSync("./src/file.json", 'utf8');
  //   console.log(data);
  // } catch (err) {
  //   console.error(err);
  // }


// console.log(calPercentage(160,5))
// console.log(sum(160,5))
