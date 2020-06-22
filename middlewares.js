import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "Wetube";
    res.locals.routes = routes; // routes변수에 담은 routes.js를 전역화
    next();
};