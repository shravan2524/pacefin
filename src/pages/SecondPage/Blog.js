import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';
import "./SecondPage.css";
import Card from "./Card";
import Navbar from "./Navbar";
import { motion, useScroll } from "framer-motion";


function Card1({ ind, urlToImage, publishedAt, title, url }) {
    
    return (
        <div >
            {
                ind > 1 && ind < 5
                    ?
                    <div className="flex pt-2 mb-8  border-4 border-white"id="card">
                        <a className="flex md:flex-row-reverse flex-row-reverse w-[70vw] sm:w-[30rem] md:w-[70vw] lg:w-[37rem] " href={url}>
                        <div className="flex-auto md:w-[20rem] w-[15rem] relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
                            <img src={urlToImage} />
                        </div>
                        <div className="flex-auto w-96 md:w-96 md:pl-4 ">
                        <div className="text-sm text-gray md:text-lg text-[8px]  ">
                            {publishedAt}
                        </div>
                        <div className="font-bold md:text-lg text-[14px]  ">
                            <span>
                                {title}
                            </span>
                        </div>
                        </div>
                        </a>
                    </div>
                    : null
            }
        </div>
    )
}
export default function Blog({ clientId, logOut, profile }) {
    const [articles, setarticles] = useState([]);
    const [farticles, setfarticles] = useState([]);
    // console.log(profile);
    // sessionStorage.setItem('profile', profile.imageUrl);
    useEffect(() => {
        axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c71900ff918a4b6bb0552e0c41e70fcc')
            .then((e) => {
                setarticles(e.data.articles);
                // console.log(articles, e.data.articles);
            })
            .catch((err) => console.log(err));

        axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c71900ff918a4b6bb0552e0c41e70fcc')
            .then((e) => {
                setfarticles(e.data.articles);
                // console.log(farticles, e.data.articles);
            })
            .catch((err) => console.log(err));
    }, []);
    var f = 0;

    return (
        <div  id="second" className="" >
        <div className="mx-[15vw]">
            <Navbar />
            <div className="py-5 border-t-2 border-black">
                <span className="font-extrabold text-3xl">Featured Artikel</span>
                <div className=" grid lg:gap-4 lg-grid lg:grid-cols-1 lg:flex">
                    <div className="my-2 flex-1 lg:w-64 md:w-full w-full">
                        {
                            farticles[0]
                                ? <div id="card"className=" border-4 border-white">
                                    <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-[35rem] md:max-w-full">
                                    <img src={farticles[0].urlToImage} />
                                </div >
                                    <div className="p-4">
                                        {farticles[0].publishedAt}
                                    </div>
                                    <div className="font-extrabold p-4">
                                        <span>
                                            {farticles[0].title}
                                        </span>
                                    </div>
                                    <div className="p-4 text-sm text-gray">
                                        {farticles[0].description}
                                    </div>
                                    <div className=" p-4 underline">
                                        <a href={farticles[0].url}>Read more</a>
                                    </div></div>
                                : null
                        }

                    </div>
                    <div className="flex-1 w-32 sm:w-full" >
                        {
                            farticles
                                ? farticles.map((e, ind) => {
                                    return <Card1 {...e} ind={ind} />
                                })
                                : null
                        }
                    </div>
                </div>
            </div>


            <div className="py-5 border-t-2 border-black text-3xl">
                Artikel Terbaru
            </div>
            <div className="grid my-4 grid-cols-1 lg:gap-10 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
                {
                    articles
                        ? articles.map((e, ind) => {
                            return <Card {...e} key={ind}/>
                        })
                        : null
                }
            </div>
        </div>
        </div>
    )
}