import axios from "axios";
const Login = () => {
  async function loginrequest() {
    await axios.post(
      "http://localhost:3000/signin",
      {},
      {
        withCredentials: true,
      }
    );
  }
  return (
    <div>
      <button onClick={loginrequest}>Login</button>
    </div>
  );
};

export default Login;
