require("dotenv").config();
const bcrypt = require('bcryptjs');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.API_URL);
  

function login(email, password, callback) {

    client.connect(function (err) {
      if (err) return callback(err);
  
      const db = client.db('RestaurantsFinder');
      const users = db.collection('Users');
  
      users.findOne({ email: email }, function (err, user) {
        if (err || !user) {
          client.close();
          return callback(err || new WrongUsernameOrPasswordError(email));
        }
        console.log("Running")
        bcrypt.compare(password, user.password, function (err, isValid) {
          client.close();
  
          if (err || !isValid) return callback(err || new WrongUsernameOrPasswordError(email));
  
          return callback(null, {
              user_id: user._id.toString(),
              nickname: user.nickname,
              email: user.email
            });
        });
      });
    });
  }
  
  export default login