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

router.get('/assignment', jwtValidation, assignment.getAssignmentList) //get Assignments
router.get('/assignment/:id', jwtValidation, assignment.getAssignment) // get assignment by ID
router.post('/assignment', jwtValidation, assignment.addAssignment) // add assignment

router.get('/answer', jwtValidation, answer.getAnswerList) // get Answers
router.get('/answer/:id', jwtValidation, answer.getAnswer) // get answer by ID
router.post('/answer', jwtValidation, answer.addAnswer) // add answer

router.get('/question', jwtValidation, question.getQuestionList) // get Questions
router.get('/question/:id', jwtValidation, question.getQuestion) // get question by ID
router.post('/question', jwtValidation, question.addQuestion) // add question

router.get('/user', jwtValidation, user.getUserList) // get Users
router.get('/user/:id', jwtValidation, user.getUser) // get user by ID
router.post('/user', jwtValidation, user.addUser) // add user
router.put('/user/:id',  jwtValidation,user.updateUser) // update user
router.delete('/user/:id', jwtValidation, user.deleteUser) // delete user by ID

app.listen(8081);