//make a to do list ap

//modules & variables
const express = require('express');
const app = express();
const path = require('path');
const PORT = 5500;

app.use(express.urlencoded({ extended : true}));
app.use(express.static(path.join(__dirname, 'public')));

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/' , (req , res) => {
    const homeHtml = path.join(__dirname , 'public' , 'home.html');
    res.sendFile(homeHtml);
    
});

app.post('/delete/:n' , (req , res) => {
    const n = req.params.n;
    tasks.splice(n , 1);
    res.redirect('/')
});

app.get('/add' , (req,res) => {
    const addHtml = path.join(__dirname , 'public' , 'add.html');
    res.sendFile(addHtml);
});

app.post('/add' , (req , res) => {
    let newTitle = req.body.title ; 
    tasks.push({ title: newTitle });
    res.redirect('/');
});


//server
app.listen(PORT , (req , res) => {
    console.log(`app is running on localhost:${PORT}` );
});


