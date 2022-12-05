import React from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default function Blog({clientId, logOut}){
    console.log(clientId);

    return(
        <div>
            <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
            Blog
        </div>
    )
}