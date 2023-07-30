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
router.get('/admin/Teachers/get', AdminController.TeachersGet);
router.get('/admin/Msc/get/:year', AdminController.MscGet);
router.get('/admin/Bsc/get/:year', AdminController.BscGet);
router.get('/admin/Bcom/get/:year', AdminController.BcomGet);
router.get('/admin/details/get/:id/:role', AdminController.Details);
router.put('/admin/students/edit', AdminController.StudentEdit);
router.delete('/admin/delete/teacher/:id/:first_name/:last_name', AdminController.Delete);
router.delete('/admin/delete/student/:id/:first_name/:last_name', AdminController.S_Delete);

module.exports = router