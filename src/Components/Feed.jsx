import axios from "axios";
import { SERVER_DOMAIN } from "../utils/constants";
import UserCard from "./UserCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeedUser } from "../store/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.feed);

  const fetchUsers = async () => {
    try {
      const userData = await axios.get(SERVER_DOMAIN + "/user/feed", {
        withCredentials: true
      });
      dispatch(addFeedUser(userData.data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  if (data.length == 0) {
    return (
      <div className='flex justify-center text-xl mt-10 font-bold'>
        No Users Left...
      </div>
    );
  }
  return (
    data.length > 0 && (
      <div className='flex justify-center items-center h-dvh'>
        <UserCard
          user={data[0]}
          userId={data[0]._id}
        />
      </div>
    )
  );
};

export default Feed;
