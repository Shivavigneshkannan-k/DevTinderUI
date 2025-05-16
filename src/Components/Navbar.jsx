import { useDispatch, useSelector } from "react-redux";
import { DEFAULT_PHOTO, SERVER_DOMAIN } from "../utils/constants";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { removeUserData } from "../store/userSlice";
const Navbar = () => {
  const data = useSelector((store) => store.user.data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      await axios.post(
        SERVER_DOMAIN + "/logout",
        {},
        {
          withCredentials: true
        }
      );
      dispatch(removeUserData());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='navbar bg-base-300 shadow-sm px-5  w-[98%] m-auto rounded-xl'>
      <div className='flex-1'>
        <Link
          to='/'
          className='btn btn-ghost text-xl'>
          DevTinder{" "}
        </Link>
      </div>
      {/* <input
          type='text'
          placeholder='Search'
          className='input input-bordered w-24 md:w-auto'
          /> */}
  {data && (<div>
      <div className='flex gap-2 items-center'>
        
        <div className='text-md mx-2'>Hello, {data.firstName}!</div>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img
                alt='user photo'
                src={data.photoPath || DEFAULT_PHOTO}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
            <li>
              <Link
                to='/profile'
                className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </Link>
            </li>
            <li>
              <Link to='/connections'>Connection</Link>
            </li>
            <li>
              <Link to='/request'>Request</Link>
            </li>
            <li>
              <Link to='/feed'>Feed</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
  </div>)}
    </div>
  );
};

export default Navbar;
