import express from "express";
import morgan from "morgan"; // 하얀글씨 morgan은 변수이름임 
import helmet from "helmet";
import cookeParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares"; // 커스텀 localsMiddleware를 만들어서 가져옴 // 알파벳순으로 정렬하는게 좋음 
import userRouter from "./routers/userRouter"; // export default 가 아니므로 {변수명}으로 받음
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

// const handleHome = (req, res) => res.send("Hello from Home");
// const handleProfile = (req, res) => res.send("You are on my profile");
app.use(helmet());
app.set("view engine", "pug");
app.use(morgan("dev")); // tiny, combined
app.use(cookeParser());
app.use(bodyParser.json()); // json을 수신했을때 이해
app.use(bodyParser.urlencoded({extended: true})); // form을 수신했을때 이해
// app.get("/", handleHome); // middleware, betweenHome, handleHome
// app.get("/profile", handleProfile);

app.use(localsMiddleware); // local변수를 global변수로 만드는 middleware

app.use(routes.home, globalRouter); // app.use("/", globalRouter);
// app.use("/users", userRouter); // app.get에서 app.use로 바꿈 : 누군가 /user로 접속하면 이 router 전체를 사용하겠다는 의미 
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app; // 누군가 app을 불러 올때 app object를 주겠다는 의미 