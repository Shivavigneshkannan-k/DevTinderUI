import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../store/requestSlice";
import { SERVER_DOMAIN } from "../utils/constants";
import RequestCard from "./RequestCard";

const Request = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.request);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const data = await axios.get(
          SERVER_DOMAIN + "/user/request/received",
          {
            withCredentials: true
          }
        );
        dispatch(addRequests(data.data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchRequest();
  }, []);
  if (data==0) {
    return <div className="flex justify-center mt-10 text-xl">No Request found</div>;
  }
  return (
    data.length>0 && (
      <div className='flex justify-center mt-5'>
        <div className='w-full h-[99%] max-w-xl p-4rounded-lg shadow-sm sm:p-8'>
          <div className='flex items-center justify-center mb-4'>
            <h5 className='text-xl  font-bold leading-none text-gray-900 dark:text-white'>
              Connection Request
            </h5>
          </div>
          <div className='flex justify-center'>
            <ul
              role='list'
              className='divide-y w-[70%] mt-10 divide-gray-200 dark:divide-gray-700'>
              {data.map((card) => (
                <RequestCard
                  user={card.userData}
                  requestId={card?.requestId}
                  key={card?.requestId}
                />
              ))} 
            </ul>
          </div>
        </div>
      </div>
    )
  );
};

export default Request;
