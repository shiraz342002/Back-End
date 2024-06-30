import express from "express";
const app = express();
import jwt from "jsonwebtoken";
import login_router from "./router/router.js"
app.use(express.json());

app.use("/",login_router)
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
https://www.youtube.com/watch?v=mbsmsi7l3r4&ab_channel=WebDevSimplified