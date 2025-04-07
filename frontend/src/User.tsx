import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState({
    username: "",
    id: 0,
  });
  useEffect(() => {
    async function getuser() {
      const userdata = await axios.get("http://localhost:3000/user", {
        withCredentials: true,
      });
      setUser(userdata.data);
    }
    getuser();
  }, []);

  return <div>showing user data username is {user.username}</div>;
};

export default User;
