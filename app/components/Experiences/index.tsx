import React from "react";
import { Experience } from "./Experience";

export const Experiences = () => {
  return (
    <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-lg mt-6">
      <h2 className="text-2xl flex items-center">
        Experience{" "}
        <span className="ml-4 bg-sky-400 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
          2+ Years
        </span>{" "}
      </h2>
      <Experience
        companyName={"FuboTV"}
        companyLogo={
          "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/ylh8b9kxr1eoptlsi9bv"
        }
        companyWebsite={"https://fubo.tv"}
        employmentPeriod={"Oct 2022 - Present"}
        title={"Software Engineer - Web"}
        location={"Bengaluru"}
        employmentType={"Full Time"}
      />
      <div className="border-b border-gray-200 mt-5"></div>
      <Experience
        companyName={"Winuall"}
        companyLogo={
          "https://uploads-ssl.webflow.com/626105cd0597e61ef48a8c6d/6300af644b8b3acedcaa7922_Favicon%2032.png"
        }
        companyWebsite={"https://winuall.com"}
        employmentPeriod={"Dec 2020 - Oct 2022"}
        title={"SDE 1 - Frontend"}
        location={"Bengaluru"}
        employmentType={"Full Time"}
      >
        <ul className="list-disc">
          <li>
            Developed{" "}
            <a
              href="https://hello.winuall.com/online-store"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400"
            >
              Online Store
            </a>{" "}
            for tutors to create an E Commerce store to sell books and courses
            using <strong className="font-bold">ReactJS</strong> and
            <strong className="font-bold">&nbsp;styled-components&nbsp;</strong>
            which is used by 2000+ tutors and coaching institutes.
          </li>
          <li className="mt-2">
            Built{" "}
            <a
              href="https://register.winuall.com"
              target="_blank"
              rel="noreferrer"
              className="text-sky-400"
            >
              winuall.com/register
            </a>{" "}
            for onboarding new users to the platform in a few clicks using{" "}
            <strong className="font-bold">NextJS</strong> which helped
            onboarding 3000 paying users to the platform.
          </li>
          <li className="mt-2">
            Implemented optimization techniques like{" "}
            <strong className="font-bold">Code Splitting</strong> and{" "}
            <strong className="font-bold">Lazy Loading</strong> to improve the
            website???s performance by 30%
          </li>
          <li className="mt-2">
            Migrated legacy client rendered React application to{" "}
            <strong className="font-bold">SSR</strong> to increase{" "}
            <strong className="font-bold">SEO</strong> score by 60%
          </li>
          <li className="mt-2">
            Set up Continuous Deployment pipeline using{" "}
            <strong className="font-bold">Github Actions</strong> and{" "}
            <strong className="font-bold">Docker</strong> to automate the
            deployment process of the frontend project.
          </li>
        </ul>
      </Experience>
      <div className="border-b border-gray-200 mt-5"></div>
      <Experience
        companyName={"Terra Economics and Analytics Lab"}
        companyLogo={"https://tealindia.in/favicon.ico"}
        companyWebsite={"https://www.tealindia.in"}
        employmentPeriod={"Aug 2020 - Dec 2020"}
        title={"Frontend Developer - Intern"}
        location={"Bengaluru"}
        employmentType={"Internship"}
      >
        <ul className="list-disc">
          <li>Involved in building Tealcheck (B2C product) from scratch.</li>
          <li className="mt-2">
            Created and deployed Regcheck to show real-estate regulations with{" "}
            <strong className="font-bold">Ghost CMS</strong> and{" "}
            <strong className="font-bold">Gatsby</strong>.
          </li>
          <li className="mt-2">
            Wrote E2E test cases for TEAL Terminal (B2B) using{" "}
            <strong className="font-bold">Cypress</strong> to increase test
            coverage to 90%
          </li>
        </ul>
      </Experience>
      <div className="border-b border-gray-200 mt-5"></div>
      <Experience
        companyName={"Printrove Products"}
        companyLogo={
          "https://printrove.com/wp-content/uploads/2017/12/favicon-1.png"
        }
        companyWebsite={"https://printrove.com"}
        employmentPeriod={"Jun 2020 - Jul 2020"}
        title={"Frontend Developer - Intern"}
        location={"Chennai"}
        employmentType={"Internship"}
      >
        <ul className="list-disc">
          <li>
            Migrated legacy{" "}
            <a
              href="https://merchants.printrove.com/"
              target="_blank"
              className="text-sky-400"
              rel="noreferrer"
            >
              {" "}
              Merchant Panel
            </a>{" "}
            and Admin Panel from Angular JS to{" "}
            <strong className="font-bold">ReactJS</strong> and{" "}
            <strong className="font-bold">Redux</strong>.
          </li>
          <li className="mt-2">
            Developed a full-fledged accessory design simulation suite that
            15000+ designers and Shopify merchants use.
          </li>
        </ul>
      </Experience>
    </div>
  );
};
