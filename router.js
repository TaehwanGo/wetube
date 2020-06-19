import express from "express";
// export default로 설정하지 않았으므로 이것을 import할때 추가로 {}로 변수를 감싸야함
export const userRouter = express.Router(); // router는 많은 route들이 담긴 파일

userRouter.get("/", (req, res) => res.send('user index'));
userRouter.get("/edit", (req, res) => res.send('user edit'));
userRouter.get("/password", (req, res) => res.send('user password'));

