import axios from "axios";
import { useContext, useState } from "react";
import { IoEye, IoEyeOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import Logo from "../assets/vcart-logo.png";
import Loading from "../component/Loading";
import { authDataContext } from "../context/authContext";
function Login() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let [loading, setLoading] = useState(false);
  let { serverUrl } = useContext(authDataContext);
  const handleOnchange = (e) => {
    let { name, value } = e.target;
    setFormData((currData) => {
      return { ...currData, [name]: value };
    });
  };
  const handleSignup = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios.post(serverUrl + "/api/signin", formData, {
        withCreadentials: true,
      });
      // const result = await response.json();
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }  
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
        {/* logo start */}
        <div className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer">
          <img className="w-[40px]" src={Logo} alt="" />
          <h1 className="text-[22px] font-sans ">OneCart</h1>
        </div>
        {/* nav logo end */}

        <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px] ">
          <span className="text-[25px] font-semibold">Login Page </span>
          <span className="text-[16px]">
            Welcome to OneCart, Place your order
          </span>
        </div>

        <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center">
          <form
            className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
            onSubmit={handleSignup}
          >
            <div className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
              <img src={google} alt="" className="w-[25px] rounded-2xl" />{" "}
              Login with Google
            </div>

            <div className="w-[100%] h-[20px] flex items-center justify-center gap-[20px]">
              <div className="w-[40%] h-[1px] bg-[#96969635]"></div> OR{" "}
              <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
            </div>

            <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px] relative ">
              <input
                type="email"
                className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold mb-[25px]"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleOnchange}
                required
              />
              <input
                type={show ? "text" : "password"}
                className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleOnchange}
                required
              />

              {!show && (
                <IoEyeOutline
                  className="w-[20px] h-[20px] cursor-pointer absolute right-[3%] bottom-[50px]"
                  onClick={() => setShow((prev) => !prev)}
                />
              )}
              {show && (
                <IoEye
                  className="w-[20px] h-[20px] cursor-pointer absolute  right-[3%] bottom-[50px]"
                  onClick={() => setShow((prev) => !prev)}
                />
              )}
            </div>

            <button className="w-[90%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] p-[9px] text-[16px] font-semibold cursor-pointer hover:bg-[#6060f5]/90">
              {loading ? <Loading /> : "Login"}
            </button>

            <p className="flex gap-[10px]">
              Don’t have an account?
              <span
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer hover:text-blue-600"
                onClick={() => {
                  navigate("/signup"); 
                }}
              >
                 Sign up
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
