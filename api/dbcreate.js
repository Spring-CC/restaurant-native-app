require("dotenv").config();
const bcrypt = require('bcryptjs');
const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.API_URL);

function createAccount(user, callback) {

    client.connect(function (err) {
      if (err) return callback(err);
  
      const db = client.db('RestaurantsFinder');
      const users = db.collection('Users');
  
      users.findOne({ email: user.email }, function (err, withSameMail) {
        if (err || withSameMail) {
          client.close();
          return callback(err || new Error('the user already exists'));
        }
  
        bcrypt.hash(user.password, 10, function (err, hash) {
          if (err) {
            client.close();
            return callback(err);
          }
  
          user.password = hash;
          user.email_verified = false;
          users.insert(user, function (err, inserted) {
            client.close();
  
            if (err) return callback(err);
            callback(null);
          });
        });
      });
    });
  }
  

  export default createAccount;