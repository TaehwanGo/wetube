import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { join, login, logout } from "../controllers/userController";

// 독점적으로 URL을 다루는 방법임, router 
const globalRouter = express.Router(); // router는 많은 route들이 담긴 파일
// videoController
// globalRouter.get(routes.home, (req, res) => res.send('Home')); // videoController
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search); // videoController
// userController
globalRouter.get(routes.join, join); // userController
globalRouter.get(routes.login, login); // userController
globalRouter.get(routes.logout, logout); // userController

export default globalRouter;