// console.log("Hi!");

// const express = require('express'); // 이걸 최신 자바스크립트 파일로 변경하면 
import express from "express";
const app = express();
// const handleListening = () => {

// }
const PORT = 4000;
// function handleListening() {
//     console.log(`Listening on : http://localhost:${PORT}`);
// }

const handleListening = () => console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => {
    console.log("Hi from handleHome");
    // console.log(req);
    res.send("Hello from Home");
}

const handleProfile = (req, res) => res.send("You are on my profile");

app.get("/",handleHome);

app.get("/profile", handleProfile);

// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function (req, res) {
//   res.send('hello world')
// })

app.listen(PORT, handleListening);