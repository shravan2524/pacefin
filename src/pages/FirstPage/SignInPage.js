import React from 'react';
import Lottie from 'react-lottie';
import { FaArrowRight } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import animationData from "./Rocketlaunch.json";
import { VscGithub } from "react-icons/vsc";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useEffect, useState } from 'react';
import ErrorPage from '../../components/ErrorPage';
import Blog from '../SecondPage/Blog';

const SignInPage = () => {
    const [profile, setProfile] = useState([]);
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const onSuccess = (res) => {
        setProfile(res.profileObj);
    };

    const onFailure = (err) => {
        console.log('failed', err);
    };

    const logOut = () => {
        setProfile(null);
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
    return (
        <div>
        {
            profile
            ? <Blog clientId={clientId} logOut={logOut} />
            :  <div className='w-[30%] bg-white mx-auto mt-[10vh] p-10 rounded-lg'>
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            />
            <div className='relative bottom-5'>
                <div className='text-extrabold text-purple text-3xl text-center'>
                    <span>Welcome to Bardeen</span>
                </div>
                <div className='text-bold text-gray text-center'>
                    <span>Let's Login to launch your automation</span>
                </div>
            </div>
            <div class="relative">
                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-purple bg-transparent rounded-lg border-[1px] border-gray appearance-none dark:text-white dark:border-gray dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-gray dark:text-gray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Email Address</label>
            </div>
            <div class="relative mt-2">
                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-purple bg-transparent rounded-lg border-[1px] border-gray appearance-none dark:text-white dark:border-gray dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-gray peer" placeholder=" " />
                <label for="floating_outlined" class="absolute text-sm text-gray dark:text-gray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Password</label>
            </div>
            <div className='flex justify-between mt-2'>
                <div className='text-bold text-purple'>
                    Create Password
                </div>
                <div className='text-bold text-purple '>
                    Forgot Password?
                </div>
            </div>
            <div className='text-center my-4'>
                <button className='btn bg-purple text-white text-bold p-2 rounded-lg w-full text-center'>
                    Sign In
                </button>
            </div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
            <div className='flex border-gray border-[1px] rounded-lg p-4 mt-2 justify-between'>
                <div className='flex'>
                    <VscGithub size={25} />
                    <span className='pl-4'>Sign In with Github</span>
                </div>
                <div className='relative top-2'>
                    <FaArrowRight />
                </div>
            </div>
    
        </div>
        }
      </div>
    );
}

export default SignInPage;
