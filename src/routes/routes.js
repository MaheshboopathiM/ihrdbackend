const express = require('express')
const router = express.Router()

const UserController = require('../Controller/user.Controller');
const AdminController = require('../Controller/admin.Controller');
const TeacherController = require('../Controller/teacher.Controller');

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
router.get('/admin/students/internal/:pnr', AdminController.StudentInternal);
router.get('/admin/students/internal/:pnr/:semester', AdminController.StudentInternalGet);
router.post('/admin/students/internal/save', AdminController.StudentMarkAdd);
router.delete('/admin/delete/teacher/:id/:first_name/:last_name', AdminController.Delete);
router.delete('/admin/delete/student/:id/:first_name/:last_name', AdminController.S_Delete);
router.delete('/admin/delete/internal/:id/:first_name/:last_name/:semester', AdminController.StudentInternalDelete);
router.post('/Teacher/Query/internal', TeacherController.TeacherQuery);
router.post('/Student/Query/internal', TeacherController.StudentQuery);

router.get('/Admin/Student/Query', AdminController.AdminQueryGet);

router.get('/Student/Query/:id', TeacherController.StudentQueryGet);
router.get('/Teacher/Query/:id', TeacherController.TeacherQueryGet);

router.get('/Student/Query/Reslove/:id', TeacherController.StudentResloveQueryGet);
router.get('/Teacher/Query/Reslove/:id', TeacherController.TeacherResloveQueryGet);

router.get('/Student/Query/induvitual/Resolve/:id', TeacherController.StudentResloveQueryGetone);
router.get('/Teacher/Query/induvitual/Resolve/:id', TeacherController.TeacherResloveQueryGetone);

router.get('/Student/Query/Reject/:id', TeacherController.StudentRejectQueryGet);
router.get('/Teacher/Query/Reject/:id', TeacherController.TeacherRejectQueryGet);

router.get('/Student/Query/induvitual/Reject/:id', TeacherController.StudentRejectQueryGetone);
router.get('/Teacher/Query/induvitual/Reject/:id', TeacherController.TeacherRejectQueryGetone);

router.get('/Student/Query/induvitual/:id', TeacherController.StudentQueryGetone);
router.get('/Teacher/Query/induvitual/:id', TeacherController.TeacherQueryGetone);

router.post('/Student/Query/Edit', TeacherController.StudentQueryEdit);
router.post('/Teacher/Query/Edit', TeacherController.TeacherQueryEdit);

router.delete('/Student/Query/Delete/:id', TeacherController.StudentQueryDelete);
router.delete('/Teacher/Query/Delete/:id', TeacherController.TeacherQueryDelete);

module.exports = router