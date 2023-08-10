'use strict';
var dbConn = require('../../dbconfig/dbconfig');
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');


//Employee object create
var Teacher = function (user) {
  this.email_id = user.email_id;
  this.password = user.password;
};

Teacher.TeachersAdd = async (req, data) => {

  const first_name = req.first_name;
  const last_name = req.last_name;
  const email_id = req.email_id;
  const join_date = req.join_date;
  const user_type = 1;
  const role = req.role;
  const id = req.id;

  if (role == 1) {
    let MailTransporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      host: 'smtp.gmail.com',
      secure: false,
      auth: {
        user: "maheshboopathiwebsoul@gmail.com",
        pass: "usfrcsvrjscngzkb",
      },
    });

    let sql = `SELECT email_id FROM users WHERE email_id ='${email_id}'`;

    dbConn.query(sql, async (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        data(201, "", { message: "Email Already USed Please Use Different Email" });
      } else {

        const generatePassword = () => {
          var length = 6,
            charset =
              "1234567890",
            retVal = "";
          for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
          }
          console.log(retVal);
          return retVal;
        };


        const password = generatePassword();

        const salt = await bcrypt.genSalt(10);

        const hashpassword = await bcrypt.hash(password, salt);


        let details = {
          from: "maheshboopathiwebsoul@gmail.com",
          to: `${email_id}`,
          subject: "COLLEGE OF APPLIED SCIENCE THODUPUZHA - WebSite Login Details",
          html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
       <html xmlns="http://www.w3.org/1999/xhtml">
         <head>
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <meta name="x-apple-disable-message-reformatting" />
           <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
           <meta name="color-scheme" content="light dark" />
           <meta name="supported-color-schemes" content="light dark" />
           <title></title>
           <style type="text/css" rel="stylesheet" media="all">
           /* Base ------------------------------ */
           
           @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
           body {
             width: 100% !important;
             height: 100%;
             margin: 0;
             -webkit-text-size-adjust: none;
           }
           
           a {
             color: #3869D4;
           }
           
           a img {
             border: none;
           }
           
           td {
             word-break: break-word;
           }
           
           .preheader {
             display: none !important;
             visibility: hidden;
             mso-hide: all;
             font-size: 1px;
             line-height: 1px;
             max-height: 0;
             max-width: 0;
             opacity: 0;
             overflow: hidden;
           }
           /* Type ------------------------------ */
           
           body,
           td,
           th {
             font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
           }
           mark{
            color:#000;
            background-color:none;
           }
           h1 {
             margin-top: 0;
             color: #333333;
             font-size: 22px;
             font-weight: bold;
             text-align: left;
           }
           
           h2 {
             margin-top: 0;
             color: #333333;
             font-size: 16px;
             font-weight: bold;
             text-align: left;
           }
           
           h3 {
             margin-top: 0;
             color: #333333;
             font-size: 14px;
             font-weight: bold;
             text-align: left;
           }
           
           td,
           th {
             font-size: 16px;
           }
           
           p,
           ul,
           ol,
           blockquote {
             margin: .4em 0 1.1875em;
             font-size: 16px;
             line-height: 1.625;
           }
           
           p.sub {
             font-size: 13px;
           }
           /* Utilities ------------------------------ */
           
           .align-right {
             text-align: right;
           }
           
           .align-left {
             text-align: left;
           }
           
           .align-center {
             text-align: center;
           }
           
           .u-margin-bottom-none {
             margin-bottom: 0;
           }
           /* Buttons ------------------------------ */
           
           .button {
             background-color: #3869D4;
             border-top: 10px solid #3869D4;
             border-right: 18px solid #3869D4;
             border-bottom: 10px solid #3869D4;
             border-left: 18px solid #3869D4;
             display: inline-block;
             color: #FFF;
             text-decoration: none;
             border-radius: 3px;
             box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
             -webkit-text-size-adjust: none;
             box-sizing: border-box;
           }
           
           .button--green {
             background-color: #22BC66;
             border-top: 10px solid #22BC66;
             border-right: 18px solid #22BC66;
             border-bottom: 10px solid #22BC66;
             border-left: 18px solid #22BC66;
           }
           
           .button--red {
             background-color: #FF6136;
             border-top: 10px solid #FF6136;
             border-right: 18px solid #FF6136;
             border-bottom: 10px solid #FF6136;
             border-left: 18px solid #FF6136;
           }
           
           @media only screen and (max-width: 500px) {
             .button {
               width: 100% !important;
               text-align: center !important;
             }
           }
           /* Attribute list ------------------------------ */
           
           .attributes {
             margin: 0 0 21px;
           }
           
           .attributes_content {
             background-color: #F4F4F7;
             padding: 16px;
           }
           
           .attributes_item {
             padding: 0;
           }
           /* Related Items ------------------------------ */
           
           .related {
             width: 100%;
             margin: 0;
             padding: 25px 0 0 0;
             -premailer-width: 100%;
             -premailer-cellpadding: 0;
             -premailer-cellspacing: 0;
           }
           
           .related_item {
             padding: 10px 0;
             color: #CBCCCF;
             font-size: 15px;
             line-height: 18px;
           }
           
           .related_item-title {
             display: block;
             margin: .5em 0 0;
           }
           
           .related_item-thumb {
             display: block;
             padding-bottom: 10px;
           }
           
           .related_heading {
             border-top: 1px solid #CBCCCF;
             text-align: center;
             padding: 25px 0 10px;
           }
           /* Discount Code ------------------------------ */
           
           .discount {
             width: 100%;
             margin: 0;
             padding: 24px;
             -premailer-width: 100%;
             -premailer-cellpadding: 0;
             -premailer-cellspacing: 0;
             background-color: #F4F4F7;
             border: 2px dashed #CBCCCF;
           }
           
           .discount_heading {
             text-align: center;
           }
           
           .discount_body {
             text-align: center;
             font-size: 15px;
           }
           /* Social Icons ------------------------------ */
           
           .social {
             width: auto;
           }
           
           .social td {
             padding: 0;
             width: auto;
           }
           
           .social_icon {
             height: 20px;
             margin: 0 8px 10px 8px;
             padding: 0;
           }
           /* Data table ------------------------------ */
           
           .purchase {
             width: 100%;
             margin: 0;
             padding: 35px 0;
             -premailer-width: 100%;
             -premailer-cellpadding: 0;
             -premailer-cellspacing: 0;
           }
           
           .purchase_content {
             width: 100%;
             margin: 0;
             padding: 25px 0 0 0;
             -premailer-width: 100%;
             -premailer-cellpadding: 0;
             -premailer-cellspacing: 0;
           }
           
           .purchase_item {
             padding: 10px 0;
             color: #51545E;
             font-size: 15px;
             line-height: 18px;
           }
           
           .purchase_heading {
             padding-bottom: 8px;
             border-bottom: 1px solid #EAEAEC;
           }
           
           .purchase_heading p {
             margin: 0;
             color: #85878E;
             font-size: 12px;
           }
           
           .purchase_footer {
             padding-top: 15px;
             border-top: 1px solid #EAEAEC;
           }
           
           .purchase_total {
             margin: 0;
             text-align: right;
             font-weight: bold;
             color: #333333;
           }
           
           .purchase_total--label {
             padding: 0 15px 0 0;
           }
           
           body {
             background-color: #F2F4F6;
             color: #51545E;
           }
           
           p {
             color: #51545E;
           }
           
           .email-wrapper {
             width: 100%;
             margin: 0;
             padding: 0;
             -premailer-width: 100%;
             -premailer-cellpadding: 0;
             -premailer-cellspacing: 0;
             background-color: #F2F4F6;
           }
           
           .email-content {
             width: 100%;
             margin: 0;
             padding: 0;
             -premailer-width: 100%;
             -premailer-cellpadding: 0;
             -premailer-cellspacing: 0;
           }
           /* Masthead ----------------------- */
           
           .email-masthead {
             padding: 25px 0;
             text-align: center;
           }
           
           .email-masthead_logo {
             width: 94px;
           }
           
           .email-masthead_name {
             font-size: 16px;
             font-weight: bold;
             color: #A8AAAF;
             text-decoration: none;
             text-shadow: 0 1px 0 white;
           }
           /* Body ------------------------------ */
           
           .email-body {
             width: 100%;
             margin: 0;
             padding: 0;
             -premailer-width: 100%;
             -premailer-cellpadding: 0;
             -premailer-cellspacing: 0;
           }
           
           .email-body_inner {
             width: 570px;
             margin: 0 auto;
             padding: 0;
             -premailer-width: 570px;
             -premailer-cellpadding: 0;
             -premailer-cellspacing: 0;
             background-color: #FFFFFF;
           }
           
           .email-footer {
             width: 570px;
             margin: 0 auto;
             padding: 0;
             -premailer-width: 570px;
             -premailer-cellpadding: 0;
             -premailer-cellspacing: 0;
             text-align: center;
           }
           
           .email-footer p {
             color: #A8AAAF;
           }
           
           .body-action {
             width: 100%;
             margin: 30px auto;
             padding: 0;
             -premailer-width: 100%;
             -premailer-cellpadding: 0;
             -premailer-cellspacing: 0;
             text-align: center;
           }
           
           .body-sub {
             margin-top: 25px;
             padding-top: 25px;
             border-top: 1px solid #EAEAEC;
           }
           
           .content-cell {
             padding: 45px;
           }
           /*Media Queries ------------------------------ */
           
           @media only screen and (max-width: 600px) {
             .email-body_inner,
             .email-footer {
               width: 100% !important;
             }
           }
           
           @media (prefers-color-scheme: dark) {
             body,
             .email-body,
             .email-body_inner,
             .email-content,
             .email-wrapper,
             .email-masthead,
             .email-footer {
               background-color: #333333 !important;
               color: #FFF !important;
             }
             p,
             ul,
             ol,
             blockquote,
             h1,
             h2,
             h3,
             span,
             .purchase_item {
               color: #FFF !important;
             }
             .attributes_content,
             .discount {
               background-color: #222 !important;
             }
             .email-masthead_name {
               text-shadow: none !important;
             }
           }
           
           :root {
             color-scheme: light dark;
             supported-color-schemes: light dark;
           }
           </style>
         </head>
         <body>
           <span class="preheader">Activate your account using below details</span>
           <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
             <tr>
               <td align="center">
                 <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                   <tr>
                     <td class="email-masthead">
                       <a href="https://example.com" class="f-fallback email-masthead_name">
                       COLLEGE OF APPLIED SCIENCE THODUPUZHA
                     </a>
                     </td>
                   </tr>
                   <!-- Email Body -->
                   <tr>
                     <td class="email-body" width="570" cellpadding="0" cellspacing="0">
                       <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                         <!-- Body content -->
                         <tr>
                           <td class="content-cell">
                             <div class="f-fallback">
                               <h1>Dear ${first_name + " " + last_name},</h1>
                               <p>We are pleased to inform you that your <mark>COLLEGE OF APPLIED SCIENCE THODUPUZHA</mark> account has been successfully created. Please find below the activation details and login information for accessing your Account:
    
                               </p>
                               <!-- Action -->
                               <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                 <tr>
                                   <td align="center">
                                     <!-- Border based button
                  https://litmus.com/blog/a-guide-to-bulletproof-buttons-in-email-design -->
                                     <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                     <tr>
                                         <td align="center">
                                           <div class="f-fallback button button--green" target="_blank">Email <br>${email_id}<br/>
                                         Password:${password}</div>
                                         </td>
                   </tr>
                   <br/>
                                      
                                     </table>
                                   </td>
                                 </tr>
                               </table>
                               <p>
    
                               Please activate your account as soon as possible.
                               In case you encounter any issues during the activation process or require further assistance, please feel free to reach out to our support team at [casthodupuzha@ihrd.ac.in] They will be glad to assist you.
                               </p>
                               <p>Thanks,
                                 <br>Admin Team, 
                                 <br>COLLEGE OF APPLIED SCIENCE THODUPUZHA</p>
                               <!-- Sub copy -->
                               
                             </div>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <table class="email-footer" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                         <tr>
                           <td class="content-cell" align="center">
                             <p class="f-fallback sub align-center">
                               [COLLEGE OF APPLIED SCIENCE THODUPUZHA]
                               <br>Near Court Complex,
                               <br>Muttom,Thodupuzha,
                               <br>Pin-685587
                               <br>Phone 
                               <br>04862257811,2257447
                               <br>Mobile
                               <br>8547005047
                               <br>Email
                               <br> [casthodupuzha@ihrd.ac.in]
                               <br>website 
                               <br>[casthodupuzha.ihrd.ac.in]
                             </p>
                           </td>
                         </tr>
                       </table>
                     </td>
                   </tr>
                 </table>
               </td>
             </tr>
           </table>
         </body>
       </html>`,
        };

        MailTransporter.sendMail(details, (err, result) => {
          if (err) {
            console.log(err)
            return data(201, "", err)
          }
          else if (result) {
            let sql = `INSERT INTO users (first_name,last_name,user_type,password,email_id) VALUES ('${first_name}','${last_name}','${user_type}','${hashpassword}','${email_id}');`

            dbConn.query(sql, (err, result) => {
              if (err) throw err;
              if (result) {
                let sql = `SELECT id FROM users WHERE email_id='${email_id}'`;
                dbConn.query(sql, (err, result) => {
                  if (err) throw err;
                  if (result) {
                    const user_id = result[0].id;
                    let sql = `INSERT INTO teachersdetails (user_id,first_name,last_name,email_id,password,joined_date) VALUES ('${user_id}','${first_name}','${last_name}','${email_id}','${hashpassword}','${join_date}');`;

                    dbConn.query(sql, (err, result) => {
                      if (err) throw err;
                      if (result) {
                        data(200, "", { message: { name: `${first_name} ${last_name}`, mes: 'Account Create SucessFully' } })
                      }
                    })

                  }
                })
              } else {
                data(401, "", { message: "user not be added" })
              }
            });
          }
        });

      }
    })
  } else {

    let sql = `UPDATE teachersdetails SET first_name='${first_name}',last_name='${last_name}',email_id='${email_id}',joined_date='${join_date}' WHERE id='${id}'`

    dbConn.query(sql, (err, result) => {
      if (err) throw err;
      if (result) {
        data(200, "", { message: { name: `${first_name} ${last_name}`, mes: 'Account Update SucessFully' } })
      }
    })

  }

}

Teacher.TeacherQuery = async (req, data) => {

  const { teacher_id, prnnumber, description, teacher_name } = req;

  let sql = `SELECT prnnumber FROM students WHERE prnnumber ='${prnnumber}'`;

  let pnrnumbercheck = await queryPromise(sql);

  if (pnrnumbercheck.length > 0) {
    let sqlCreate = `INSERT INTO teacherquery (teacher_id,prnnumber,description,teacher_name) VALUES ('${teacher_id}','${prnnumber}','${description}','${teacher_name}');`

    dbConn.query(sqlCreate, async (err, result) => {
      if (err) throw err;
      if (result) {
        data(200, "", { name: prnnumber, message: "Query send SucessFully" })
      } else {
        data(201, "", { name: `${prnnumber} Query Not send` })
      }
    })
  } else {
    data(201, "", { message: "Wrong PNR NUMBER" })
  }
  console.log(pnrnumbercheck);
}


Teacher.StudentQuery = async (req, data) => {

  const { student_id, prnnumber, description, Student_name } = req;

  let sql = `SELECT prnnumber FROM students WHERE prnnumber ='${prnnumber}'`;

  let pnrnumbercheck = await queryPromise(sql);

  if (pnrnumbercheck.length > 0) {
    let sqlCreate = `INSERT INTO studentquery (student_id,prnnumber,description,student_name) VALUES ('${student_id}','${prnnumber}','${description}','${Student_name}');`

    dbConn.query(sqlCreate, async (err, result) => {
      if (err) throw err;
      if (result) {
        data(200, "", { name: prnnumber, message: "Query send SucessFully" })
      } else {
        data(201, "", { name: `${prnnumber} Query Not send` })
      }
    })
  } else {
    data(201, "", { message: "Wrong PNR NUMBER" })
  }
  console.log(pnrnumbercheck);
}

Teacher.TeacherRejectQueryGet = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,id FROM teacherquery WHERE teacher_id=${id} and status=2 ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", { result })
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.AdminTeacherRejectQueryGet = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,id,teacher_name FROM teacherquery WHERE status=2 ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", { result })
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.AdminStudentRejectQueryGet = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,id,student_name FROM studentquery WHERE status=2 ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", { result })
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.StudentRejectQueryGet = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,id FROM studentquery WHERE student_id=${id} and status=2 ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", { result })
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.AdminTeacherResloveQueryGet = async (req, data) => {

  let sql = `SELECT description,id,teacher_name FROM teacherquery WHERE status=1 ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", { result })
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.AdminStudentResloveQueryGet = async (req, data) => {

  let sql = `SELECT description,id,student_name FROM studentquery WHERE status=1 ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", { result })
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.StudentResloveQueryGet = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,id FROM studentquery WHERE student_id=${id} and status=1 ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", { result })
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.TeacherResloveQueryGet = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,id FROM teacherquery WHERE teacher_id=${id} and status=1 ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", { result })
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.TeacherQueryGet = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,id FROM teacherquery WHERE teacher_id=${id} and status=0 ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", { result })
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.StudentQueryGet = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,id FROM studentquery WHERE student_id=${id} and status=0 ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", { result })
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}

Teacher.TeacherRejectQueryGetone = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,admin_message,id FROM teacherquery WHERE id=${id} ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", result[0])
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.StudentRejectQueryGetone = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,admin_message,id FROM studentquery WHERE id=${id} ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", result[0])
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.TeacherResloveQueryGetone = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,admin_message,id FROM teacherquery WHERE id=${id} ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", result[0])
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.StudentResloveQueryGetone = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,admin_message,id FROM studentquery WHERE id=${id} ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", result[0])
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}

Teacher.TeacherQueryGetone = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,id,prnnumber FROM teacherquery WHERE id=${id} ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", result[0])
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}
Teacher.StudentQueryGetone = async (req, data) => {
  const id = req.id;

  let sql = `SELECT description,id,prnnumber FROM studentquery WHERE id=${id} ORDER BY id DESC;`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      data(200, "", result[0])
    } else {
      let result = [];
      data(200, '', { result })
    }
  })

}


Teacher.TeacherQueryEdit = async (req, data) => {
  console.log("njsfdj")
  const id = req.id;
  const prnnumber = req.prnnumber;
  const description = req.description;

  let prnnumbercheck = `SELECT prnnumber FROM students WHERE prnnumber=${prnnumber};`
  
  const result =await queryPromise(prnnumbercheck)

  if (result.length > 0) {

    let sql = `UPDATE teacherquery SET description='${description}',prnnumber='${prnnumber}' WHERE id=${id};`;

    dbConn.query(sql, (err, result) => {
      if (err) throw err;
      if (result && result.affectedRows !== undefined) {
        let affected = result.affectedRows;
        if (affected > 0) {
          data(200, "", { msg: "Query Updated SucessFully" })
        } else {
          data(201, "", { msg: "Query Not Updated" })
        }
      } else {
        data(201, "", { msg: "something happend in backend you can restart backend Server" })
      }
    })
  }else {
    data(201, "", { msg: "Wrong PNR NUMBER" })
  }

}
Teacher.TeacherPEnding = async (req, data) => {
  const id = req.id;

  let sql = `UPDATE teacherquery SET status=0 WHERE id=${id};`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result && result.affectedRows !== undefined) {
      let affected = result.affectedRows;
      if (affected > 0) {
        data(200, "", { msg: "Query Pending SucessFully" })
      } else {
        data(201, "", { msg: "Query Not Updated" })
      }
    } else {
      data(201, "", { msg: "something happend in backend you can restart backend Server" })
    }
  })

}
Teacher.StudentPEnding = async (req, data) => {
  const id = req.id;

  let sql = `UPDATE studentquery SET status=0 WHERE id=${id};`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result && result.affectedRows !== undefined) {
      let affected = result.affectedRows;
      if (affected > 0) {
        data(200, "", { msg: "Query Pending SucessFully" })
      } else {
        data(201, "", { msg: "Query Not Updated" })
      }
    } else {
      data(201, "", { msg: "something happend in backend you can restart backend Server" })
    }
  })

}
Teacher.StudentQueryEdit = async (req, data) => {
  const id = req.id;
  const description = req.description;

  let sql = `UPDATE studentquery SET description='${description}' WHERE id=${id};`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result && result.affectedRows !== undefined) {
      let affected = result.affectedRows;
      if (affected > 0) {
        data(200, "", { msg: "Query Updated SucessFully" })
      } else {
        data(201, "", { msg: "Query Not Updated" })
      }
    } else {
      data(201, "", { msg: "something happend in backend you can restart backend Server" })
    }
  })

}
Teacher.AdminTeacherQueryReject = async (req, data) => {
  const id = req.id;
  const description = req.description;

  let sql = `UPDATE teacherquery SET admin_message='${description}',status=2 WHERE id=${id};`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result && result.affectedRows !== undefined) {
      let affected = result.affectedRows;
      if (affected > 0) {
        data(200, "", { msg: "Query Rejected SucessFully" })
      } else {
        data(201, "", { msg: "Query Not Updated" })
      }
    } else {
      data(201, "", { msg: "something happend in backend you can restart backend Server" })
    }
  })

}
Teacher.AdminStudentQueryReject = async (req, data) => {
  const id = req.id;
  const description = req.description;

  let sql = `UPDATE studentquery SET admin_message='${description}',status=2 WHERE id=${id};`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result && result.affectedRows !== undefined) {
      let affected = result.affectedRows;
      if (affected > 0) {
        data(200, "", { msg: "Query Rejected SucessFully" })
      } else {
        data(201, "", { msg: "Query Not Updated" })
      }
    } else {
      data(201, "", { msg: "something happend in backend you can restart backend Server" })
    }
  })

}
Teacher.AdminTeacherQuery = async (req, data) => {
  const id = req.id;
  const description = req.description;

  let sql = `UPDATE teacherquery SET admin_message='${description}',status=1 WHERE id=${id};`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result && result.affectedRows !== undefined) {
      let affected = result.affectedRows;
      if (affected > 0) {
        data(200, "", { msg: "Query Reslove SucessFully" })
      } else {
        data(201, "", { msg: "Query Not Updated" })
      }
    } else {
      data(201, "", { msg: "something happend in backend you can restart backend Server" })
    }
  })

}
Teacher.AdminStudentQuery = async (req, data) => {
  const id = req.id;
  const description = req.description;

  let sql = `UPDATE studentquery SET admin_message='${description}',status=1 WHERE id=${id};`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result && result.affectedRows !== undefined) {
      let affected = result.affectedRows;
      if (affected > 0) {
        data(200, "", { msg: "Query Reslove SucessFully" })
      } else {
        data(201, "", { msg: "Query Not Updated" })
      }
    } else {
      data(201, "", { msg: "something happend in backend you can restart backend Server" })
    }
  })

}

Teacher.StudentQueryDelete = async (req, data) => {
  const id = req.id;

  let sql = `DELETE FROM studentquery WHERE id=${id};`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result) {
      data(200, "", { msg: "Query Deleted Sucessfully" })
    } else {
      data(200, '', { msg: "Query Not Deleted" })
    }
  })

}

Teacher.TeacherQueryDelete = async (req, data) => {
  const id = req.id;

  let sql = `DELETE FROM teacherquery WHERE id=${id};`;

  dbConn.query(sql, (err, result) => {
    if (err) throw err;
    if (result) {
      data(200, "", { msg: "Query Deleted Sucessfully" })
    } else {
      data(200, '', { msg: "Query Not Deleted" })
    }
  })

}


function queryPromise(sql) {
  return new Promise((resolve, reject) => {
    dbConn.query(sql, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

module.exports = Teacher;