const testdata = require("../../data/testdata.json");
let fs = require("fs");
const { writeToPath } = require("@fast-csv/format");

// 1. Define array of userids
// 2. Make result array
// 3. Loop through array of userids, inserting another for loop inside loop
//    to use same userid (x) number of times (x being how many restaurants you want per user)
// 4. once inner loop finishes, push the user with the id and the swipe array to the resuts array
// 5. once finished, fs.writefile and make a CSV file.

// userid:"a111"
// swiped_right:Array
// 0:"g398515"
// 1:"g953127"
// 2:"g914009"

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
const options = { headers: true};

fs.writeFile('./user.json', data, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})

// writeToPath(path, data, options)
//   .on("error", (err) => console.error(err))
//   .on("finish", () => console.log("Done writing."));

// const RSFST13000 = (data) => {
//     return data.filter(category=>{
//         return category.code["category_code_l"][0]=="RSFST13000" || category.code["category_code_l"][1]=="RSFST13000"
//     }).map(key=>{
//         return key.id
//     })
// }
// console.log(RSFST13000(testdata))
