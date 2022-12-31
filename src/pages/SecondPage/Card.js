import React from "react";

export default function Card({ urlToImage,  description, url, title }) {
    return (
        <>
                <div className="my-2 border-4 border-white" id="card">
                    <a className="" href={url}>
                   <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-full sm:mx-auto">
                        <img src={urlToImage} className="hover:scale-110 transition duration-300 ease-in-out" />
                    </div>
                    <div className="pt-4">
                    December, 2022
                    </div>
                    <div className="font-extrabold pt-2">
                        <span>
                            {title}
                        </span>
                    </div>
                    <div className="pt-2 text-sm text-gray">
                        {description}
                    </div>
                    </a>
                </div>

        </>
    );
}