const testdata = require("../../data/testdata.json");
let fs = require("fs");
const { writeToPath } = require("@fast-csv/format");

const createData = () => {
  let result = [];
  for (let i = 0; i < 200; i++) {
    let obj = { userid: JSON.stringify(i), swiped_right: [] };
    for (let j = 0; j <= 80; j++) {
      let num = Math.ceil(Math.random() * testdata.length - 1);
      if (!obj.swiped_right.includes(testdata[num].id)) {
        obj.swiped_right.push(testdata[num].id);
      }
    }
    result.push(obj);
  }

  return result;
};

let data = JSON.stringify(createData());
const path = `${__dirname}/user2.csv`;
const options = { headers: true };

fs.writeFile("./user.json", data, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("Successfully wrote file");
  }
});
