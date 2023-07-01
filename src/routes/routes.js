const express = require('express')
const router = express.Router()

const UserController = require('../Controller/user.Controller');
const AdminController = require('../Controller/admin.Controller');

// LogIn Employee
router.post('/user/login', UserController.login);
// LogOut Employee
router.post('/user/logout', UserController.logout);

router.post('/admin/new/teacher/add', AdminController.TeachersAdd);

router.post('/admin/new/student/add', AdminController.StudentAdd);

module.exports = router