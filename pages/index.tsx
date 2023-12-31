import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { Box, Tab } from "@mui/material";
import Link from "next/link";
import React from "react";
import Dashboard from "./components/dashboard";
import NewHeader from "./newHeader";
import NewNav from "./aside-Nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "600"],
});

const Home: NextPage = () => {
 


  return (
    <div className={` ${poppins.className} `}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NewHeader />

        <Box className="flex items-start">
            <NewNav />
            
            <Box className="main-content w-full p-8 px-5 bg-[#f7f7f7] h-full">
              <Box className="maincontent">
                <Dashboard />
                </Box>
            </Box>
        </Box>
      </main>
    </div>
  );
};

export default Home;
