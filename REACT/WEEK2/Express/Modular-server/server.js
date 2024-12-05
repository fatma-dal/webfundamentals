import express from "express"
import router from "./routes/user.route";
const app = express()
const port =5000;
app.use(express.json())
app.use("/api",router)






app.listen(port,()=>console.log(`Linstening on port: ${port}`))