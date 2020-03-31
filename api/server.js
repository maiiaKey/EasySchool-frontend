var express = require("express");
// var login = require('./routes/loginroutes');
var jwtValidation = require('./middlewares/token.validation');
var auth = require('./routes/auth');
var assignment = require ('./routes/assignment');
var answer = require ('./routes/answer');
var question = require ('./routes/question');
var user = require ('./routes/user');
var bodyParser = require('body-parser');

var app = express();
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept, Delete");
    next();
});

var router = express.Router();

app.use('/api/v1', router);
router.get('/', function (req, res) {
    res.send("Welcome to EasySchool API V1");
});


router.post('/auth', auth.login); //authorization

router.get('/assignment', jwtValidation, assignment.getAssignmentList) //get assignment list
router.get('/assignment/:id', jwtValidation, assignment.getAssignment) // get assignment by ID
router.post('/assignment', jwtValidation, assignment.addAssignment) // add assignment

// Delete Assignment by ID
router.delete('/assignment/:id', jwtValidation, assignment.deleteAssignment)

// Get Answers List
router.get('/answer', jwtValidation, answer.getAnswerList)
// Get Answer by ID
router.get('/answer/:id', jwtValidation, answer.getAnswer)
// Add Answer
router.post('/answer', jwtValidation, answer.addAnswer)
// Update Answer by ID
// router.put('/answer/:id', answer.updateAnswer)
// Delete Answer by ID
router.delete('/answer/:id', jwtValidation, answer.deleteAnswer)

// Get Question List
router.get('/question', jwtValidation, question.getQuestionList)
// Get Question by ID
router.get('/question/:id', jwtValidation, question.getQuestion)
// Add Question
router.post('/question', jwtValidation, question.addQuestion)
// Update Question by ID
// router.put('/question/:id', question.updateQuestion)
// Delete Question by ID
router.delete('/question/:id', jwtValidation, question.deleteQuestion)

// Get Users List
router.get('/user', jwtValidation, user.getUserList)
// Get User by ID
router.get('/user/:id', jwtValidation, user.getUser)
// Add User
router.post('/user', jwtValidation, user.addUser)
// Update User
router.put('/user/:id',  jwtValidation,user.updateUser)
// Delete User by ID
router.delete('/user/:id', jwtValidation, user.deleteUser)

app.listen(8081);