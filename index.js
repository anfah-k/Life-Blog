import express from "express";
import bodyParser from "body-parser"



const port = 3000;
const app = express();

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({ extended: true }));


let posts = [];

app.get("/", (req, res) => {
    res.render("index.ejs",{})
  });

app.get("/create", (req, res) => {
   res.render("creat.ejs",{})
});

app.post("/submit", (req, res) => {
  const { title, content } = req.body;
  posts.push({ id: Date.now().toString(), title, content });
   res.render("submit.ejs",{});
  
});

app.get("/posts",(req,res) => {
  res.render("post.ejs",{ posts })
});

app.get("/edit/:id", (req, res) => {
  const post = posts.find(p => p.id === req.params.id);
  res.render("edit.ejs", { post });
});

app.post("/update/:id", (req, res) => {
  const { title, content } = req.body;
  const post = posts.find(p => p.id === req.params.id);
  post.title = title;
  post.content = content;
  res.redirect("/posts");
});

app.post("/delete/:id", (req, res) => {
  posts = posts.filter(p => p.id !== req.params.id);
  res.redirect("/posts");
});

app.listen(port, ()=>{
    console.log(`the server in port ${port}.`);
    
});