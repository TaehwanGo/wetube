import express from "express";
import morgan from "morgan"; // 하얀글씨 morgan은 변수이름임 
import helmet from "helmet";
import cookeParser from "cookie-parser";
import bodyParser from "body-parser";
import {userRouter} from "./router"; // export default 가 아니므로 {변수명}으로 받음

const app = express();

const handleHome = (req, res) => res.send("Hello from Home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(morgan("dev")); // tiny, combined
app.use(cookeParser());
app.use(bodyParser.json()); // json을 수신했을때 이해
app.use(bodyParser.urlencoded({extended: true})); // form을 수신했을때 이해
app.use(helmet());

app.get("/", handleHome); // middleware, betweenHome, handleHome

app.get("/profile", handleProfile);

app.use("/user", userRouter); // app.get에서 app.use로 바꿈 : 누군가 /user로 접속하면 
// 이 router 전체를 사용하겠다는 의미 


export default app;