const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const taskRoute = express.Router();

taskRoute.route("/")
.all(authMiddleware)
.get(getAllTask)
.post(creatTask);

taskRoute.route("/:id")
.all(authMiddleware)
.get(singleTask)
.put(updateTask)
.delete(deleteTask)

module.exports = taskRoute
