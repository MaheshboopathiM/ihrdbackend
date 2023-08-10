
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


  exports.TeachersGet = function (req, res) {
    try {
      Admin.TeachersGet(function (status, err, data) {
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

  exports.MscGet = function (req, res) {
    try {
      Admin.MscGet(req.params,function (status, err, data) {
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

  exports.BscGet = function (req, res) {
    try {
      Admin.BscGet(req.params,function (status, err, data) {
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

  exports.BcomGet = function (req, res) {
    try {
      Admin.BcomGet(req.params,function (status, err, data) {
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

  exports.Details = function (req, res) {
    try {
      Admin.Details(req.params,function (status, err, data) {
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


  exports.Delete = function (req, res) {
    try {
      Admin.Delete(req.params,function (status, err, data) {
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

  exports.S_Delete = function (req, res) {
    try {
      Admin.S_Delete(req.params,function (status, err, data) {
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

  exports.StudentEdit = function (req, res) {
    try {
      Admin.StudentEdit(req.body,function (status, err, data) {
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

  exports.StudentInternal = function (req, res) {
    try {
      Admin.StudentInternal(req.params,function (status, err, data) {
        if (status === 200) {
          res.status(200).send({ status:200,response: 'Success', message: '',data });
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

  exports.StudentMarkAdd = function (req, res) {
    try {
      Admin.StudentMarkAdd(req.body,function (status, err, data) {
        if (status === 200) {
          res.status(200).send({ status:200,response: 'Success', message: '',data });
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


  exports.StudentInternalGet = function (req, res) {
    try {
      Admin.StudentInternalGet(req.params,function (status, err, data) {
        if (status === 200) {
          res.status(200).send({ status:200,response: 'Success', message: '',data });
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


  exports.StudentInternalDelete = function (req, res) {
    try {
      Admin.StudentInternalDelete(req.params,function (status, err, data) {
        if (status === 200) {
          res.status(200).send({ status:200,response: 'Success', message: '',data });
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


  exports.AdminQueryGet = function (req, res) {
    try {
        Admin.AdminQueryGet(req.params, function (status, err, data) {
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
  exports.AdminTeacherQueryGet = function (req, res) {
    try {
        Admin.AdminTeacherQueryGet(req.params, function (status, err, data) {
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
  exports.forget = function (req, res) {
    try {
        Admin.forget(req.body, function (status, err, data) {
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
