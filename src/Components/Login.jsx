import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../store/userSlice";
import { SERVER_DOMAIN } from "../utils/constants.js";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorMessage, setError] = useState("");
  const user = useSelector((state) => state.user.data);

  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (user) {
      navigate("/feed");
    }
  });

  const login = async () => {
    try {
      setError("");
      const user = await axios.post(
        SERVER_DOMAIN + "/login",
        {
          emailId,
          password
        },
        { withCredentials: true }
      );
      const { data } = user.data;
      dispatch(addUserData(data));
      navigate("/feed");
    } catch (err) {
      console.log(err.message);
      setError(err.message)
    }
  };
  const signUp = async () => {
    try {
      setError("");
      const user = await axios.post(
        SERVER_DOMAIN + "/signup",
        {
          emailId,
          password,
          firstName,
          gender
        },
        { withCredentials: true }
      );
      const { data } = user.data;
      dispatch(addUserData(data));
      navigate("/feed");
    } catch (err) {

      setError(err.response.data.message);
      console.log(err.response.data.message);
    }
  };

  return (
    <div className='hero bg-base-200 min-h-screen'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'>
          <h1 className='text-5xl font-bold'>
            {show ? "Register Now" : "Login Now"}!
          </h1>
          <p className='py-6'>
            DevTinder connects developers with similar skills, interests, and
            goals—find your perfect coding partner for projects, hackathons, or
            learning collaborations in just a few clicks.
          </p>
        </div>
        <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl '>
          <div className='card-body'>
            <fieldset className='fieldset'>
              {show && (
                <>
                  <label className='label'>First Name</label>
                  <input
                    type='text'
                    className='input'
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label className='label'>Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => {
                      setGender(e.target.value);
                      console.log(e.target.value);
                    }}
                    className='select'>
                    <option selected>Select your Gender </option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='others'>Other</option>
                  </select>
                </>
              )}

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

              <button
                className='btn btn-neutral mt-4'
                onClick={show ? signUp : login}>
                {show ? "Register" : "Login"}
              </button>
              <div className='text-sm font-light text-gray-500 dark:text-gray-400'>
                {show ? "Have" : "Don't"} have an account?{" "}
                <p
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  onClick={handleToggle}>
                  {show ? "Login here" : "Register here"}
                </p>
              </div>
              <p className='text-xl my-2 text-red-600'>{errorMessage}</p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
