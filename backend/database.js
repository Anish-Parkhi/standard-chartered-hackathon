// const mongoose = require("mongoose")

// mongoose.connect("mongodb+srv://vansh:1234@cluster1.k821jap.mongodb.net/standard")

// const UserSchema = new mongoose.Schema({
//     token : String,
//     email : String,
//     password : String,
//     phoneNo : {
//         type : String,
//         required : true
//     }
// })

// const UidaiSchema = new mongoose.Schema({
//     adhaarNo : String,
//     fullName : String,
//     birthDate : String,
//     gender : String,
//     phoneNo : String,
//     address : String
// })

// const AdhaarSchema = new mongoose.Schema({
//     adhaarNo : String,
//     fullName : String,
//     birthDate : String,
//     gender : String,
//     phoneNo : String,
//     address : String
// })

// const OtpSchema = new mongoose.Schema({
//     token : String,
//     otp : Number,
// }, {
//     timestamps : true
// })

// OtpSchema.index({createdAt : 1}, {expireAfterSeconds: 10})

// const User = mongoose.model("UserDetails",UserSchema)
// const UIDAI = mongoose.model("UIDAI",UidaiSchema)
// const Adhaar = mongoose.model("AdhaarDetails",AdhaarSchema)
// const OTP = mongoose.model("OtpGen",OtpSchema)

// module.exports = {
//     User,
//     UIDAI,
//     Adhaar,
//     OTP
// }