var PostgreSQL = require('pg').Pool;
// var bcrypt = require('bcrypt');
var jsonfile = require('jsonfile');
var pg = new PostgreSQL ({
    host: 'localhost',
    database: 'es',
    user: 'es',
    password: 'dACsXcgC66mMEescgdKYBRPbHmuZCTby5pzPGsEHJYgk255b',
    port: 5432    
})

// connection.connect(function(err){
// if(!err) {
//     console.log("Database is connected ... nn");
// } else {
//     console.log("Error connecting database ... nn",err);
// }
// });

exports.register = function(req,res){
  console.log("req",req.body);
  var today = new Date();
  // bcrypt.hash(req.body.password, 5, function( err, bcryptedPassword) {
   //save to db
   var users={
     "first_name":  req.body.first_name,
     "last_name":   req.body.last_name,
     "username":    req.body.userid,
     "password":    req.body.password,
     "role":        req.body.role
   }
   console.log(users.created);
//    pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(201).send(`User added with ID: ${result.insertId}`)
//   })


// pg.query('select current_database();', (error, results) => {
// pg.query('select * from collegeusers', (error, results) => {
//     if (error) {
//       console.log("error ocurred", error);
//       res.send({
//         "code":400,
//         "failed":"error ocurred"
//       })
//     }else{
//       console.log('The solution is: ', results);
//       res.send({
//         "code":200,
//         "success":"select sucessfully"
//           });
//     }
//     });


   pg.query('INSERT INTO collegeusers (first_name, last_name, username, password, role, created, modified) VALUES ($1, $2, $3, $4, $5, NOW(), NOW())', [users.first_name, users.last_name, users.username, users.password, users.role], (error, results) => {
   if (error) {
     console.log("error ocurred", error);
     res.send({
       "code":400,
       "failed":"error ocurred"
     })
   }else{
     console.log('The solution is: ', results);
     res.send({
       "code":200,
       "success":"user registered sucessfully"
         });
   }
   });


}

exports.login = function(req,res){
  var userid= req.body.userid;
  var password = req.body.password;
  var role = req.body.role;
  pg.query('SELECT * FROM collegeusers WHERE username = $1',[userid], function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  }else{
    // console.log('The solution is: ', results[0].password,req.body.password,req.body.role);
    if(results.rowCount >0){
        console.log(results);
      if(results.rows[0].password == req.body.password){
        if(results.rows[0].role == req.body.role){
          var file = './d/userid.json'
          var obj = {userid: req.body.userid}
          jsonfile.writeFile(file, obj, function (err) {
            if(err){
              console.log("Error ocurred in writing json during login at login handler in login routes",err);
            }
          })
          res.send({
            "code":200,
            "success":"login sucessfull"
          })
        }
        else{
          res.send({
            "code":204,
            "success":"You have logged in from wrong user role"
          })
        }

      }
      else{
        res.send({
             "code":204,
             "success":"Email and password does not match"
        })
      }

    }
    else{
      res.send({
        "code":204,
        "success":"Email does not exits"
          });
    }


  }
  });
}
