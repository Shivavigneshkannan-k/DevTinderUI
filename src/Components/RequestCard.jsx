import React from "react";
import { DEFAULT_PHOTO, SERVER_DOMAIN } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeRequest } from "../store/requestSlice";

const RequestCard = ({ user, requestId }) => {
  const dispatch = useDispatch();
  const handleRequest = async (status, id) => {
    try {
      await axios.patch(
        `${SERVER_DOMAIN}/request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(requestId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    user && (
      <div className='my-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
        <div className='flex flex-col items-center py-5'>
          <img
            className='w-24 h-24 mb-3 rounded-full shadow-lg object-cover'
            src={user.photoPath || DEFAULT_PHOTO}
            alt='Bonnie image'
          />
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            {" "}
            {user.lastName} {user.firstName}
          </h5>
          <span className='text-sm text-gray-500 dark:text-gray-400'>
            {user.age} year old {user.gender}
          </span>
          <div>
            {user.skills.map((skill) => (
              <p key={skill}>{skill}</p>
            ))}
          </div>
          <div className='flex mt-4 md:mt-6'>
            <a
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              onClick={() => {
                handleRequest("accepted", requestId);
              }}>
              Accept
            </a>
            <a
              className='py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
              onClick={() => {
                handleRequest("rejected", requestId);
                
              }}>
              Reject
            </a>
          </div>
        </div>
      </div>
    )
  );
};

export default RequestCard;
