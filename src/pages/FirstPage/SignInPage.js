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
    const [email, setEmail] = useState();
    const [Password, setPassword] = useState();
    localStorage.setItem("profileImg", profile.imageUrl);
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
        <div>
            Happy new year
        </div>
    );
}

export default SignInPage;
