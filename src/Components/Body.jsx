import { Outlet } from "react-router";
import Navbar from "./Navbar";
import {useSelector,useDispatch } from "react-redux"
import { addUserData } from "../store/userSlice";
import { useNavigate } from "react-router";
import axios from "axios";
import { SERVER_DOMAIN } from "../utils/constants";
import { useEffect } from "react";

const Body = () => {
  const user = useSelector(state => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(()=>{
    const fetchUser = async ()=>{
      try{
        const userData = await axios.get(SERVER_DOMAIN+'/profile/view',{withCredentials:true});
        dispatch(addUserData(userData.data));
      }
      catch(err){
        console.log(err.message);
        navigate('/');
      }
    }

    if(!user){
      fetchUser();
    }
    
  },[])
  return (
    <>
     <Navbar/>
     <Outlet/>
    </>
  );
};

export default Body;
