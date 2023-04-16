import  express from "express";
import {PORT, HOST} from './config';
import apiRouter from './api-router';

const app = express();


app.use(express.static("dist"));

app.set("view engine", "ejs");
app.use("/api", apiRouter)

app.use("/", (req, res) => {
    res.render("index", {content: "loading,,,,"});
})

app.listen(PORT, () => {
    console.info(`http://${HOST}:${PORT}`);
    
});