
const Admin = require('../model/admin.model');

exports.TeachersAdd = function (req, res) {
    try {
      Admin.TeachersAdd(req.body, function (status, err, data) {
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
  };


  exports.StudentAdd = function (req, res) {
    try {
      Admin.StudentAdd(req.body, function (status, err, data) {
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
  };