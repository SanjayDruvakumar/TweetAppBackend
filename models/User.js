import {Schema,model} from "mongoose";
import bcrypt from "bcryptjs";
let userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required field"],
        minLength:[4,"Name should have at least 4 characters"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is required field"],
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:[true,"Password is required field"],
        minLength:[8,"Password should have at least 8 characters"],
        trim:true
    },
    confirmedPassword:{
        type:String,
        validate:{
            validator:function(value){
                return this.password===value
            },
            message:"Password and Confrim Passwrod dosn't match"
        },
        select:false
        }
},{
    timestamps:true
})

//pre hook
userSchema.pre("save",async function(next){
    let salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)
    next()
})

//methods  to varify password
userSchema.methods.verifyPassword=async function(pwd,pwdDB){
    return await bcrypt.compare(pwd,pwdDB)
}
let User=model("User",userSchema)

export default User;