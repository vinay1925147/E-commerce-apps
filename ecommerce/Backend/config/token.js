import jwt from "jsonwebtoken";
const secret = "$@vinay@#";
export const gentoken = async (user) => {
  try {
    const payload ={
         _id:user._id,
         name:user.name,
         email:user.email,
    }
    let token = await jwt.sign(payload, secret);
    return token;
  } catch (err) {
    console.log("token error",err);
  }
};


