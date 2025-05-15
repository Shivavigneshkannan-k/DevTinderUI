import axios from "axios";
import { SERVER_DOMAIN } from "../utils/constants";
import UserCard from "./UserCard";
import { useEffect, useState } from "react";

const Feed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await axios.get(SERVER_DOMAIN + "/user/feed", {
          withCredentials: true
        });
        setData(userData.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUsers();
  }, []);
  console.log(data);
  return (
    data.length > 0 && (
      <div className="flex justify-center items-center h-dvh">
        <UserCard user={data[0]} />
      </div>
    )
  );
};

export default Feed;
