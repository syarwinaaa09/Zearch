import Head from 'next/head';
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import ZearchLogo from "./ZearchLogo.png";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = e => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Zearch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Zmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2
          rounded-full hover:bg-gray-100 cursor-pointer"/>

          <Avatar url="https://pbs.twimg.com/media/E4vmtHUWYAUXsFr?format=png&name=small"/>
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image 
          src={ZearchLogo}
          height={100}
          width={300}
        />

        <div className="flex w-full mt-5 hover:shadow-lg
        focus-within:shadow-lg max-w-md rounded-full border
        border-gray-200 px-5 py-3 items-center sm:max-w-xl
        lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500"/>
          <input 
          ref={searchInputRef}
          type="text" 
          className="flex-grow focus:outline-none" />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
        sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Zearch Search</button>

          <button onClick={search} className="btn">I'm Feeling Lucky</button>
        </div>
      </form>

      <Footer />
    </div>
  )
}
