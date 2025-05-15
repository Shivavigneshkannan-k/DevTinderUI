import React from "react";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
import ShowProfile from "./ShowProfile";

const Profile = () => {
  const user = useSelector((state) => state.user.data);
  return (
    user && (
      <div className='flex justify-center  gap-4 items-center'>
        <EditProfile user={user} />
        <ShowProfile user={user} />
      </div>
    )
  );
};

export default Profile;
