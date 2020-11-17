import routes from "./routes";

// local변수를 global변수화 하는 middleware
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube"; // api 문서에서 res.locals 함수를 알아봄, siteName은 내가 원하는 어떤 이름
     res.locals.routes = routes; // routes변수에 담은 routes.js를 전역화
    next();
};