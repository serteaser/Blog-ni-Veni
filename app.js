import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.html");
});

app.listen(port, () => {
    console.log(`server is running on port ${port}.`);
})