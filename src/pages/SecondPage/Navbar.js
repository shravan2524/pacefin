import React, {useState} from "react";
import { Transition } from "@headlessui/react";
import {FiTwitter, FiInstagram, FiGlobe} from "react-icons/fi";
import { GoogleLogin, GoogleLogout } from 'react-google-login';

export default function Navbar({imageUrl, clientId, logOut}) {
    const [isOpen, setIsOpen] = useState(false);
  
    console.log( clientId);
    return (
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center w-full">
                <div className="flex-shrink-0 rounded-full">
                  <img
                  style={{borderRadius:"1000rem"}}
                    className="h-8 w-8"
                    src={imageUrl}
                  />
                </div>
                <div className="hidden lg:block lg:flex lg:justify-between w-full">
                  <div className="ml-10 flex items-baseline space-x-4">
                    
  
                    <a
                      href="#"
                      className="text-gray hover:bg-gray hover:text-white px-2 py-2 rounded-md text-sm font-medium"
                    >
                      LEARN
                    </a>
                    <a
                      href="#"
                      className=" hover:bg-gray  text-bold  py-2 rounded-md text-sm font-medium"
                    >
                      BLOGS
                    </a>
                    <a
                      href="#"
                      className="text-gray hover:bg-gray hover:text-white px-2 py-2 rounded-md text-sm font-medium"
                    >
                      BOOKMARKS
                    </a>
                    <a
                      href="#"
                      className="text-gray hover:bg-gray hover:text-white px-2 py-2 rounded-md text-sm font-medium"
                    >
                      UI KIT
                    </a>
                    <a
                      href="#"
                      className="text-gray hover:bg-gray hover:text-white px-2 py-2 rounded-md text-sm font-medium"
                    >
                      LAIN NYA
                    </a>

                  </div>
                  <div className="flex gap-4" id="logout">
                    <FiTwitter style={{margin:"auto"}} />
                    <FiInstagram style={{margin:"auto"}} />
                    <FiGlobe style={{margin:"auto"}} />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-purple hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
  
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div className="lg:hidden" id="mobile-menu">
                <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 " id="logout">
                <a
                      href="#"
                      className="text-gray hover:bg-gray hover:text-white px-2 py-2 block rounded-md text-sm font-medium"
                    >
                      LEARN
                    </a>
                <a
                      href="#"
                      className=" hover:bg-gray text-bold  py-2 px-2 rounded-md block text-sm font-medium"
                    >
                      BLOGS
                    </a>
  
                    
  
                    <a
                      href="#"
                      className="text-gray hover:bg-gray hover:text-white px-2 py-2 block rounded-md text-sm font-medium"
                    >
                      BOOKMARKS
                    </a>
  
                    <a
                      href="#"
                      className="text-gray hover:bg-gray hover:text-white px-2 py-2 block rounded-md text-sm font-medium"
                    >
                      UI KIT
                    </a>
  
                    <a
                      href="#"
                      className="text-gray hover:bg-gray hover:text-white px-2 py-2 block rounded-md text-sm font-medium"
                    >
                      LIAN NYA
                    </a>
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </div>
    );
}