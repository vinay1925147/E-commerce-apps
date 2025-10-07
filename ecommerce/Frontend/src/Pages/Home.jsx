import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Link to="/signup" className="bg-red-300"> SignUp</Link>
      <Link to="/signin" className=" bg-blue-700"> Signin</Link>
    </>
  );
}

export default Home;
