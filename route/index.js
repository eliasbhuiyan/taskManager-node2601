const express = require("express");
const router = express.Router()
const authRoute = require("./authRoute")

router.get("/", (req, res)=>{
    res.status(200).send("Hello From Server")
})

router.use("/auth", authRoute)

module.exports = router;

// DB_URL=mongodb+srv://node2601-task-manager:w0h7JQIrGwtlfF2p@cluster0.hppyt.mongodb.net/taskManager-node2601?appName=Cluster0