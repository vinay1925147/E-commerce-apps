import bcrypt from "bcryptjs";
import validator from "validator";
import { gentoken } from "../config/token.js";
import userModel from "../model/user.model.js";

export const registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // basic validation
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Enter a valid Email" });
    }
    if (!password || password.length < 5) {
      return res
        .status(400)
        .json({ message: "Enter a strong password of at least 8 characters" });
    }
    // check if user already exists
    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      name,
      email,
      password: hashpassword,
    });
   
    let token = await gentoken(user);
    
    res.cookie("token", token);

    return res.status(201).json(user);
  } catch (error) {
    console.error(`registration error`, error);
    return res
      .status(500)
      .json({ message: `Register Error ${error.message || error}` });
  }
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await userModel.findOne({ email });
    // console.log(user)
    if (!user) { 
      return res.status(404).json({ msg: "User is not found " });
    }
    // const userhashpass = await bcrypt.hash(password, 10);
   
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "password is incorrect" });
    }
    // let token = await gentoken(user._id);
    // console.log(token);
    // res.cookie("token", token);
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "login error is accur",
    });
  }
};

export const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ msg: "logOut Successfull" });
  } catch (error) {
    res.status(500).json({
      msg: "login error is accur"
    });
  }
};

export const googleLogin = async (req,res) => {
    try {
        let {name , email} = req.body;
         let user = await User.findOne({email}) 
        if(!user){
          user = await User.create({
            name,email
        })
        }
       
        let token = await genToken(user._id)
        res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    return res.status(200).json(user)

    } catch (error) {
         console.log("googleLogin error")
        return res.status(500).json({message:`googleLogin error ${error}`})
    }
    
}