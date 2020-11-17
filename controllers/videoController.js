// export const home = (req,res) => res.send("home");
import { videos } from "../db";
// export const home = (req,res) => res.render("home", {pageTitle: "Home"});
export const home = (req,res) => {
  res.render("home", {pageTitle: "Home", videos});
}
export const search = (req, res) => {
  // const searchingBy = req.query.term; // ES6이전 방식
  const {
    query: {term: searchingBy}
  } = req; // searchingBy로 이름 바꿈 
  // console.log(searchingBy); // searchingBy로 바뀌었기 때문에 term으로 출력이 안됨 
  res.render("search", { pageTitle: "Search", searchingBy}); //searchingBy: searchingBy
}

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });