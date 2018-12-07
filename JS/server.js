const express = require('express');
const app = express();
var path    = require("path");
//Create five Get files
app.get('/File1', (req, res) => {
   res.sendFile(path.join(__dirname,'/File1.html'));
});
app.get('/File2',function(req,res){
  res.sendFile(path.join(__dirname,'/File2.html'));
});
app.get('/File3',function(req,res){
  res.sendFile(path.join(__dirname,'/File3.html'));
});
app.get('/File4',function(req,res){
  res.sendFile(path.join(__dirname,'/File4.html'));
});
app.get('/File5',function(req,res){
  res.sendFile(path.join(__dirname,'/File5.html'));
});
//Create two static file directories
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'pictures')));

//Create another static file directory but map it to a different logical path
app.use('/differentfiles', express.static(path.join(__dirname,'documents')));

//Create a get route to another location
app.get('/redirect', (req, res) => {
   res.redirect(301,'/File1');
});

//Create two ejs templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/views', (req, res) => {
   res.render('one', {'title': 'Whats up!', 'message': 'HIIIIIIIIIIIIIIIIII!!!!!'});
});

app.get('/poetry', (req, res) => {
   res.render('two', {'title': 'Beautiful Poetry', 'message': '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. Youre on your own. And you know what you know. And YOU are the one wholl decide where to go.. - Dr. Seuss, Oh, The Places Youll Go!'});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
