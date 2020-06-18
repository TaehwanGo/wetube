// console.log("Hi!");

// const express = require('express'); // 이걸 최신 자바스크립트 파일로 변경하면 
import express from "express";
import morgan from "morgan"; // 하얀글씨 morgan은 변수이름임 
import helmet from "helmet";
import cookeParser from "cookie-parser";
import bodyParser from "body-parser";
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

app.use(morgan("dev")); // tiny, combined
app.use(cookeParser());
app.use(bodyParser.json()); // json을 수신했을때 이해
app.use(bodyParser.urlencoded({extended: true})); // form을 수신했을때 이해
app.use(helmet());
// app.use(betweenHome); // handleHome을 실행시키고 싶으므로 app.get("/",handleHome); 앞에 위치해야함(지금위치)
// 모든 경로에 betweenHome함수를 실행하는 것을 적용 
// 여기에 모든 미들웨어를 적어주면 하나하나 실행하게 됨
// const middleware = (req, res, next) => { // next가 아닌 이런식의 미들웨어는 연결을 끊을 수 있음 
//     res.send("not happening");
// };

app.get("/", handleHome); // middleware, betweenHome, handleHome

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);