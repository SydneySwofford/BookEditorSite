const express = require('express');
const { link } = require('fs');
const path = require('path');
const app=express();
//let homePath=path.join(__dirname,)
import "./public/style.css";

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({extended: true}))

function toggleMenu(displayState){
    const nav=document.getElementById('header_navigation');
    const closeIcon=document.getElementById('close-icon');

    nav.style.display=displayState;
    closeIcon.style.display=displayState;
}

app.listen(3000, ()=>{
    console.log("Serving on Port 3000")
    console.log(__dirname);
})

app.get('/', (req,res)=>{
    res.render('home');
})