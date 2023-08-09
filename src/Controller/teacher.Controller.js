
const Teacher = require('../model/teacher.Model');

exports.TeacherQuery = function (req, res) {
    try {
        Teacher.TeacherQuery(req.body, function (status, err, data) {
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

exports.StudentQuery = function (req, res) {
    try {
        Teacher.StudentQuery(req.body, function (status, err, data) {
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

exports.StudentQueryGet = function (req, res) {
    try {
        Teacher.StudentQueryGet(req.params, function (status, err, data) {
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

exports.TeacherQueryGet = function (req, res) {
    try {
        Teacher.TeacherQueryGet(req.params, function (status, err, data) {
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
exports.StudentResloveQueryGet = function (req, res) {
    try {
        Teacher.StudentResloveQueryGet(req.params, function (status, err, data) {
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
exports.TeacherResloveQueryGet = function (req, res) {
    try {
        Teacher.TeacherResloveQueryGet(req.params, function (status, err, data) {
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
exports.StudentRejectQueryGet = function (req, res) {
    try {
        Teacher.StudentRejectQueryGet(req.params, function (status, err, data) {
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
exports.TeacherRejectQueryGet = function (req, res) {
    try {
        Teacher.TeacherRejectQueryGet(req.params, function (status, err, data) {
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

exports.StudentResloveQueryGetone = function (req, res) {
    try {
        Teacher.StudentResloveQueryGetone(req.params, function (status, err, data) {
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
exports.TeacherResloveQueryGetone = function (req, res) {
    try {
        Teacher.TeacherResloveQueryGetone(req.params, function (status, err, data) {
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


exports.TeacherRejectQueryGetone = function (req, res) {
    try {
        Teacher.TeacherRejectQueryGetone(req.params, function (status, err, data) {
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
exports.StudentRejectQueryGetone = function (req, res) {
    try {
        Teacher.StudentRejectQueryGetone(req.params, function (status, err, data) {
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

exports.StudentQueryGetone = function (req, res) {
    try {
        Teacher.StudentQueryGetone(req.params, function (status, err, data) {
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
exports.TeacherQueryGetone = function (req, res) {
    try {
        Teacher.TeacherQueryGetone(req.params, function (status, err, data) {
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

exports.StudentQueryEdit = function (req, res) {
    try {
        Teacher.StudentQueryEdit(req.body, function (status, err, data) {
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
exports.TeacherQueryEdit = function (req, res) {
    try {
        Teacher.TeacherQueryEdit(req.body, function (status, err, data) {
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

exports.StudentQueryDelete = function (req, res) {
    try {
        Teacher.StudentQueryDelete(req.params, function (status, err, data) {
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
exports.TeacherQueryDelete = function (req, res) {
    try {
        Teacher.TeacherQueryDelete(req.params, function (status, err, data) {
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