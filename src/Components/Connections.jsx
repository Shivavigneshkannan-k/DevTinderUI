import axios from "axios";
import { SERVER_DOMAIN } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../store/connectionSlice";
import ConnectionCard from "./ConnectionCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connection);

  useEffect(() => {
    const fetchConnections = async () => {
      try {
        const userData = await axios.get(SERVER_DOMAIN + "/user/connection", {
          withCredentials: true
        });
        dispatch(addConnections(userData.data));
      } catch (err) {
        console.log(err);
      }   
    };
    fetchConnections();
  }, []);
  if (!connections) {
    return <div>No Connections found</div>;
  }

  return (
    connections.length >0 && (
      <div className='flex justify-center mt-5'>
        <div className='w-full max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex items-center justify-between mb-4'>
            <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
              Connections
            </h5>
            <a
              href='#'
              className='text-md font-medium text-blue-600 hover:underline dark:text-blue-500'>
              View all
            </a>
          </div>
          <div className='flow-root'>
            <ul
              role='list'
              className='divide-y divide-gray-200 dark:divide-gray-700'>
              {connections.map((con) => (
                <ConnectionCard
                  user={con}
                  key={con._id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default Connections;
