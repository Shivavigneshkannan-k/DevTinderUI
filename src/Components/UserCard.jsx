import React from "react";
import { DEFAULT_PHOTO } from "../utils/constants";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className=''>
      <div className='card bg-base-300 w-96 shadow-sm '>
        <figure>
          <img
            src={user.photoPath || DEFAULT_PHOTO}
            alt='user photo'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>
            {user.lastName} {user.firstName}
          </h2>
          <p>{user.about}</p>
          <p>{user.age} years old</p>
          {user.skills.length > 0 && <p>Skills: {user.skills}</p>}
        </div>
        <div className="flex justify-around mb-2 p-4">
            <button className='btn btn-success'>
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2.5'
                stroke='currentColor'
                className='size-[1.2em]'>
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                />
            </svg>
            Like
            </button>
            <button className='btn btn-error'>
            Dislike
            <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='2.5'
                stroke='currentColor'
                className='size-[1.2em]'>
                <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z'
                />
            </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
