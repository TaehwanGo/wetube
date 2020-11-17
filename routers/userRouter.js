import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";
// export default로 설정하지 않았으므로 이것을 import할때 추가로 {}로 변수를 감싸야함
const userRouter = express.Router(); // router는 많은 route들이 담긴 파일

// userRouter.get("/", (req, res) => res.send('user index'));
// userRouter.get("/edit", (req, res) => res.send('user edit'));
// userRouter.get("/password", (req, res) => res.send('user password'));
userRouter.get(routes.editProfile, editProfile); // 이게 먼저와야됨 userDetail보다 
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;


