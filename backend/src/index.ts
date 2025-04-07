
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import jwt, { JwtPayload } from "jsonwebtoken";
import path from "path";
const jwtsecret = "myjwtsecret"
const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))


app.post("/signin", (req, res) => {
    const token = jwt.sign({ username: "sujan", id: 1 }, jwtsecret)
    res.cookie("token", token)  //cookie parser ::: send set-cookie value to client
    res.json({ msg: "sign in successfully" })
})

app.get("/user", (req, res) => {
    const cookieToken = req.cookies.token; //set set-cookie value empty

    const decoded = jwt.verify(cookieToken, jwtsecret) as JwtPayload;

    const { username, id } = decoded;
    res.json({ username, id })

})

app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.json({ msg: "logged out" })
})





app.listen(3000, () => {
    console.log("server running on port 3000")
})