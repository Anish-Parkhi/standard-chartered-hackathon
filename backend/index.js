const express = require("express")
const jwt = require("jsonwebtoken")
const {User, OTP} = require("./database")
const SendOtp = require("./middleware")

const app = express()
const Secret = "##12ab##"
app.use(express.json())

app.post("/sign-up", async function(req,res){
    const email = req.body.email
    const password = req.body.password
    const phoneNo = req.body.phoneNo
    const check = await User.findOne({
        phoneNo : phoneNo
    })
    if(check){
        res.json({
            msg : "ERROR!! Account Already Present"
        })
    }
    else{
        const token = jwt.sign({
            phoneNo : phoneNo
        },Secret)

        await User.create({
            token : token,
            email : email,
            password : password,
            phoneNo : phoneNo
        })

        await OTP.create({
            token : token,
            otp : Math.floor((Math.random()*9999)+1000)
        })

        res.json({
            msg : "Sign Up Complete"
        })
    }
})

app.post("/verify-otp", SendOtp, async function(req,res){
    const token = req.headers.authorization
    const userOtp = req.body.otp
    const sysOtp = await OTP.findOne({
        token : token
    })
    if(userOtp == sysOtp.otp){
        res.json({
            msg : "OTP Verified Successfully"
        })
    }
    else{
        res.json({
            msg : "ERROR! Invalid OTP"
        })
    }
})

app.listen(3000)