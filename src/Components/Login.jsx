import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../store/userSlice";
import { SERVER_DOMAIN } from "../utils/constants.js";

const Login = () => {
  const [emailId, setEmailId] = useState("luffy@gmail.com");
  const [password, setPassword] = useState("Luffy@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    if (user) {
      navigate("/feed");
    }
});

  const login = async () => {
    try {
      const user = await axios.post(
        SERVER_DOMAIN + "/login",
        {
          emailId,
          password
        },
        { withCredentials: true }
      );
      const { data } = user.data;
      console.log(data);
      dispatch(
        addUserData(data)
      );
      navigate("/feed");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>Login now!</h1>
          <p className='py-6'>
            DevTinder connects developers with similar skills, interests, and
            goals—find your perfect coding partner for projects, hackathons, or
            learning collaborations in just a few clicks.
          </p>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl '>
          <div className='card-body'>
            <fieldset className='fieldset'>
              <label className='label'>Email</label>
              <input
                type='email'
                className='input'
                placeholder='Email'
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
              <label className='label'>Password</label>
              <input
                type='password'
                className='input'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <a className='link link-hover'>Forgot password?</a>
              </div>
              <button
                className='btn btn-neutral mt-4'
                onClick={login}>
                Login
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
