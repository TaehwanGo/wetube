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

const handleHome = (req, res) => res.send("Hello from Home");

const handleProfile = (req, res) => res.send("You are on my profile");

const betweenHome = (req, res, next) => {
    console.log("I'm between");
    next(); // app.get에서 betweenHome의 다음 함수인 handleHome함수를 실행
}

app.use(betweenHome); // handleHome을 실행시키고 싶으므로 app.get("/",handleHome); 앞에 위치해야함(지금위치)
// 모든 경로에 betweenHome함수를 실행하는 것을 적용 
// 여기에 모든 미들웨어를 적어주면 하나하나 실행하게 됨

app.get("/",handleHome); // betweenHome, handleHome

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);