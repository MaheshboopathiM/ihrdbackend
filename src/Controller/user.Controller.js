'use strict';
const User = require('../model/user.model');




/**
 * Login Function
 * @param {*} req 
 * @param {*} res
 * Route: /user/login
 * Method: login
 */
exports.login=function(req,res){
  //Validate if the request body is not empty
  if(Object.keys(req.body).length === 0){
    res.status(400).send({ response:'Failure',message:''});
  }
  else
  {
    // Calling model method to verify
    try {
      User.login(req.body,function(status,err, data) {
        if (status === 200) {
          res.status(200).send({ response: 'Success', message: '',data });
        }else if(status === 201){
            res.status(201).send({response: "Failure", data})
        } else {
          res.status(401).send({ response: "Failure", message: err });
        }
      });
    } catch (err) {
      res.status(500).send({ response: 'Failure', message: err });
    };
  }
};



/**
 * Logout Function
 * @param {*} req 
 * @param {*} res
 * Route: /user/logout
 * Method: logout
 */
exports.logout = function (req, res) {
  try {
    User.logoutsubmit(req.body, function (status, err, data) {
      if (status === 200) {
        res.status(200).send({ response: 'Success', message: '' });
      } else {
        res.status(401).send({ response: "Failure", message: err });
      }
    });
  } catch (err) {
    res.status(500).send({ response: 'Failure', message: err });
  };
};