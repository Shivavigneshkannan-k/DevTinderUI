import React from "react";
import { DEFAULT_PHOTO } from "../utils/constants";

const ConnectionCard = ({ user }) => {
  if (!user) return <></>;
  return (
    <li className='py-3 md:py-8'>
      <div className='flex items-center'>
        <figure className='shrink-0'>
          <img
            className='w-14 h-14 rounded-full object-cover'
            src={user.photoPath || DEFAULT_PHOTO}
            alt='user photo'
          />
        </figure>
        <div className='flex-1 min-w-0 ms-4'>
          <p className='text-md font-medium text-gray-900 truncate dark:text-white'>
            {user.firstName} {user.lastName}
          </p>
          <p className='text-md text-gray-500 truncate dark:text-gray-400'>
            {user.age} years old {user.gender}
          </p>
        </div>
        <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
          <button className="btn btn-info">Message</button>
        </div>
      </div>
    </li>
  );
};

export default ConnectionCard;
