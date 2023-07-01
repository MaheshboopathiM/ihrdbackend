'use strict';
var dbConn = require('../../dbconfig/dbconfig');
const jsonwebtoken = require('../services/jwtgenerate')
const bcrypt = require('bcrypt');


//Employee object create
var User = function (user) {
  this.email_id = user.email_id;
  this.password = user.password;
};


//login model
User.login = async(req, data) => {
  const UserName = req.email_id;
  const Password = req.password;
  if (UserName && Password) {
    let sql = `SELECT * FROM users WHERE email_id ='${UserName}'`;
    dbConn.query(sql, async (err, result, feild) => {
      if (err) throw err;
      if (result.length > 0) {
        const isValid = await bcrypt.compare(Password,result[0].password)
        const token =  jsonwebtoken(result[0])
        if(isValid){
          if(result[0].user_type === 2){
            let link = "/home/hard";
            // hard is means admin
            data(200, null,{"auth_token":token,"redirect":link});
          }else if(result[0].user_type === 1){
            let link = "/home/medium";
            // medium means teachers
            data(200, null,{"auth_token":token,"redirect":link});
          }else if(result[0].user_type === 0){
            let link = "/home/low";
            // low mwans students and parents
            data(200, null,{"auth_token":token,"redirect":link});
          }
        }else{
          data(200,null,{message:"Password Or Email id Wrong"})
        }
      } else {
        data(false, '', null);
      }
    });
  }
  else{
    data(false, '', null);
  }
};






//logout model
User.logoutsubmit = (req, data) => {
  let AuthToken = req.auth_token;
  //console.log(AuthToken)
  dbConn.query(`SELECT COUNT(auth_token) FROM users where auth_token ='${AuthToken}'`, (err,result) => {
  if (err) throw err;  
   //console.log(result)
  if (AuthToken > result) {
  // delete the JWT token from the database
    const sql = `UPDATE users SET auth_token = '${null}' where auth_token ='${AuthToken}'`;
    dbConn.query(sql, (err, result, feild) => {
      if (err) throw err;
      if (result) {
        data(200," ",);
      } else {
        data(400, '', null);
      }
    }); 
    } else {
      data(401, '', null);
    };
  });
};



module.exports = User;