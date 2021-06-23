const router = require("express").Router();
const User = require("../models/User")

// REGISTER

router.get("/", (req,res) => {
    res.send("hey its auth route")
})

module.exports = router