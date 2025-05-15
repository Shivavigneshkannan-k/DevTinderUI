import React from "react";
import { DEFAULT_PHOTO } from "../../utils/constants";

const ShowProfile = ({user}) => {
  return ((
      <div className=''>
        <div className='card bg-base-300 w-96 shadow-sm '>
          <figure>
            <img
              src={user.photoPath ||DEFAULT_PHOTO}
              alt='user photo'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>
              {user.lastName} {user.firstName}
            </h2>
            <p>{user.about}</p>
            <p>{user.age} years old</p>
            <p>{user.gender}</p>
            {user.skills.length > 0 && <p>Skills: {user.skills}</p>}
          </div>
        </div>
      </div>
    )
  );
};

export default ShowProfile;
