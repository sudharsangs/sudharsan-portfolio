import Head from "next/head";
import React from "react";
import { Header } from "../app/components/Header";

export const Regcheck = () => {
  return (
    <div className="w-full  flex items-center flex-col bg-gradient-to-r from-slate-100 via-slate-200 to-gray-200 h-screen">
      <Head>
        <title>Winuall Parents Module</title>
      </Head>
      <main className="max-w-5xl sm:p-10">
        <Header navContents={["projects"]} />
        <div className="px-2">
          <h2 className="text-3xl my-5">Winuall Parents Module</h2>
          <section>
            <p className="text-xl mt-4">
              Built a gatsby site to view real-estate regulations of all the
              metropolitan cities in India.
            </p>
            <p className="text-xl mt-4">
              Integrated with Ghost CMS and rendered the content from the CMS
              using GraphQL and Gatsby, which made the content team manage all
              the content in one place. Wrote custom functionalities for the CMS
              using NodeJS Handlebars
            </p>
            <p className="text-xl mt-4">
              <strong>Featured Skills:</strong> React, GatsbyJS, GraphQL
            </p>
            <p className="text-xl">
              <strong>Company:</strong>
              <a
                className="ml-2 text-sky-400"
                href="https://tealindia.in"
                target="_blank"
                rel="noreferrer"
              >
                Terra Economics and Analytics Lab
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Regcheck;
