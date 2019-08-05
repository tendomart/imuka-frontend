//Create login form NodeJS Server

//Import required modules
// var mysql = require('mysql');
var express = require('express');
// var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
// var crypto = require('crypto');


//set port
const port = 4000;

//create databases  connection profile
// let connection = mysql.createConnection({
//     host     : 'localhost',
// 	user     : 'root',
// 	password : 'tendo',
// 	database : 'toyotalogin'

// });

// connect to database
// connection.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('Connected to database');
// });
// global.db = connection;

//initialize express and configure some of it's packages
let app = express();
// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));
// app.use(bodyParser.urlencoded({extended : true}));
// app.use(bodyParser.json());

// configure middleware
app.use(express.static(path.join(__dirname, 'static')));
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render toyota form
app.set('css', __dirname + '/css'); // set express to look in this folder to render css files
app.set('js', __dirname + '/js'); // set express to look in this folder to render js files
app.set('img', __dirname + '/img'); //render images using express
app.set('sweetalert2', __dirname + '/sweetalert2'); //render sweetalert2 using express

//app.set('view engine', 'html'); // configure template engine
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json()); // parse form data client


//create routes to access pages and other resources

//login form route
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});

//registration form route
//  app.get('/register', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/views/register.html'));
//  });

//Toyota form route
//  app.get('/', function(request, response) {
// 	 if(request.session.loggedin ==true){
// 		response.sendFile(path.join(__dirname + '/views/index.html'));
// 	 }
// 	else{
// 		response.sendFile(path.join(__dirname + '/views/login.html'));
// 		response.send('<html><font color=red>Please Login First to Access The Application <a style="text-decoration:none" href="/">Login</a> ');
// 	}
// });

//retrieve   user Credential Information for Login
// app.post('/auth', function(request, response) {
// 	var username = request.body.username;
// 	var password = request.body.password;
// 	//decrypt password using crypto
// 	hash =crypto
// 	.createHash("md5")
// 	.update(password)
// 	.digest("hex");
// 	if (username && hash) {
// 		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, hash], function(error, results, fields) {
// 			if (results.length > 0 ) {
// 				request.session.loggedin = true;
// 				request.session.username = username;
// 				//request.session.password = hash;
// 				response.redirect('/index');
	
// 			} else {
// 				response.send('<html><font color=red>Please Enter The Right credentials !'+'<br>');
// 			}			
// 			response.end();
// 		});
// 	} else {
// 		document.getElementById().innerHTML='Please Correct enter Username and Password!'
// 		response.send(document.getElementById('error').innerHTML='Please Correct enter Username and Password!');
// 		response.end();
// 	}
// });

//Create a new User
// app.post('/createuser',(req,res)=>{
// const username = req.body.username
// const password = req.body.password
// const email = req.body.email

// const querystring = "INSERT INTO accounts (username ,password ,email) VALUES(?,?,?)";
// //ENCRYPT The password using crypto
// hash =crypto.createHash('md5').update(password).digest('hex');

// connection.query(querystring,[username,hash,email], (err, results, field)=>{
// 	if (err){
// 		console.log("an error occured "+err);
// 		return;
// 	} else {
// 		res.redirect('/register');
// 	} 
// 	res.end();
// });
// });


//Save Mail Order Information to Database
// app.post('/submitOrder',(req,res)=>{
// 	const cust_id = req.body.id
// 	const name = req.body.name
// 	const state = req.body.state
// 	const cust = req.body.cust
// 	const shippingType = req.body.shippingType
// 	const description = req.body.description
// 	const price = req.body.price
// 	const quantity = req.body.quantity
// 	const container_type = req.body.container_type
	
// 	const querystring = "INSERT INTO mailorders (cust_id,name ,state ,cust,shippingType,description,price,quantity,container_type) VALUES(?,?,?,?,?,?,?,?,?)";
	
// 	connection.query(querystring,[cust_id,name ,state ,cust,shippingType,description,price,quantity,container_type], (err, results, field)=>{
// 		if (err){
// 			console.log("an error occured "+err);
// 			return;
// 		} 
// 		// else {
// 		// 	res.redirect('/index');
// 		// } 
// 		// res.end();
// 	});
// 	});





//return main page
// app.get('/index1', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.username + '!');
// 		response.sendFile(path.join(__dirname +'/index.html'));
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });

app.listen(port,()=>{
	//console.log('Running on Port : ${port}'+${port});
	console.log(`Server running on port: ${port}`);
});