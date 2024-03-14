const twilio = require("twilio")
const {User} = require("./database")
const accountSid = "AC48eef23d8ac51d393170df291b16f889"
const authToken = "a0d33eaa8174eede8a9633b2fc4ed65c"

function otpSender(otp){
    const client = new twilio(accountSid,authToken)
    return client.messages.create({
        body : `Your OTP for E-KYC Login is ${otp}`, from: "+17065842927", to: "+918600032551"
    }).then(console.log("Message Sent!"))
}

async function SendOtp(req,res,next){
    const token = req.headers.authorization
    const check = await User.findOne({
        token : token
    })
    if(check){
        otpSender(otp)
        next()
    }
    else{
        res.json({
            msg : "ERROR!!"
        })
    }
}

module.exports = SendOtp