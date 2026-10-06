const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const taskRoute = require('./src/routes/task.route')


dotenv.config()
const app = express()
const PORT = process.env.PORT || 3200

app.use(express.json())
app.use(cors({origin: '*'}))


//Routes
app.use("/api/task/", taskRoute)

app.get("/", (req, res)=>{
    res.status(200).json({message: "Server running"})
})

app.listen(PORT, ()=> console.log(`http://localhost:${PORT} \nServer running...`))