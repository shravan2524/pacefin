import React from 'react';
import Lottie from 'react-lottie';
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import animationData from "./Rocketlaunch.json";
import { VscGithub } from "react-icons/vsc";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ErrorPage from '../../components/ErrorPage';
import Blog from '../SecondPage/Blog';
import "./FirstPage.css";
import { useAuth0 } from "@auth0/auth0-react";



const SignInPage = () => {
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    const [profile, setProfile] = useState([]);
    const [email , setEmail] = useState();
    const [Password, setPassword] = useState();
    
    function Signin(){
        console.log(email, Password)
    }
    console.log(profile);
    localStorage.setItem("profileImg", profile.imageUrl);
    useEffect(() => {
        // const item = localStorage.getItem("profileImg");
        // if(item=== undefined) {navigate("/");setProfile(null);console.log(profile)}
        // else navigate("/blogs")
    }, [])
    const navigate = useNavigate();
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const clientId = '1068016891409-2ddb77j38g6sudbhurh3cmd6atiqb7st.apps.googleusercontent.com';

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });
    if (isLoading) {
        return <div>Loading ...</div>;
      }
    return (
        <div id="first">
        {
            isAuthenticated 
             ? navigate("/blogs")
            :  <div className='w-[80vw] sm:w-[55vw] md:w-[45vw]  lg:w-[30vw] xl:[30vw] bg-white mx-auto mt-[10vh] p-10 rounded-lg' id="lottie">
                <div className=' relative right-12 sm:relative sm:right-0 '>
            <Lottie 
            
                options={defaultOptions}
                height={300}
                width={300}
            />
            </div>
            <div className='relative bottom-5'>
                <div className='text-extrabold text-purple text-3xl text-center'>
                    <span>Welcome to Bardeen</span>
                </div>
                <div className='text-bold text-gray text-center'>
                    <span>Let's Login to launch your automation</span>
                </div>
            </div>
            <div class="relative">
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-purple bg-transparent rounded-lg border-[1px] border-gray appearance-none dark:text-white dark:border-gray dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray peer" placeholder=" " />
                <label value={Password} onChange={(e)=> setPassword(e.target.value)} for="floating_outlined" class="absolute text-sm text-gray dark:text-gray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email Address</label>
            </div>
            <div class="relative mt-2">
                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-purple bg-transparent rounded-lg border-[1px] border-gray appearance-none dark:text-white dark:border-gray dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-gray dark:text-gray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
            </div>
            <div className='flex justify-between mt-2'>
                <a href='/' className='text-[11px] md:text-[18px] sm:text-bold text-purple underline'>
                    Create Password
                </a>
                <a href='/' className='text-[11px] md:text-[18px] sm:text-bold text-purple underline'>
                    Forgot Password?
                </a>
            </div>
            <div className='text-center my-4'>
                <button onClick={() => loginWithRedirect()} className='btn bg-purple text-white text-bold p-2 border-2 border-white rounded-lg w-full text-center hover:bg-white hover:border-purple hover:border-2 hover:text-purple' >
                    Sign In
                </button>
            </div>
            {/* <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={(e) => {setProfile(e.profileObj); localStorage.setItem("profileUrl", e.profileObj.imageUrl); console.log(e.profileObj); navigate("/blogs")}}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                className="hover:border-2 hover:border-purple"
            /> */}
             <a href='/' onClick={() => loginWithRedirect()} className='flex border-gray border-[1px] rounded-lg p-4 mt-2 justify-between' id="github">
                <div className='flex'>
                    <FcGoogle size={25} />
                    <span className='pl-4'>Sign In with Github</span>
                </div>
                <div className='relative top'>
                    <FaArrowRight />
                </div>
            </a>
            <a href='/' onClick={() => loginWithRedirect()} className='flex border-gray border-[1px] rounded-lg p-4 mt-2 justify-between' id="github">
                <div className='flex'>
                    <VscGithub size={25} />
                    <span className='pl-4'>Sign In with Github</span>
                </div>
                <div className='relative top'>
                    <FaArrowRight />
                </div>
            </a>
    
        </div>
        }
      </div>
    );
}

export default SignInPage;
