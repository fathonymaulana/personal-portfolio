"use client";

import { FC } from "react";
import Image from "next/image";

const Education: FC = () => {
  return (
    <>
      <div className="px-8 md:px-12 py-8 md:py-24 border-b border-border">
        <div className="px-0 md:px-8">
          <div className="flex items-start flex-col md:flex-row gap-8">
            <Image
              src="/images/logo/gunadarma.png"
              alt="Education"
              width={500}
              height={500}
              priority
              className="w-full h-auto object-contain max-w-[56px]"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3>Gunadarma University</h3>
                <p className="Small">Bachelor’s degree, Information System</p>
                <p className="Smaller">2014 - 2019</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4>Overview:</h4>
                <p className="tableItem">
                  A highly motivated and detail-oriented information systems
                  graduate with a passion for leveraging technology to solve
                  complex problems. Experienced in software development,
                  database management, and network administration. Seeking a
                  challenging position where I can apply my skills and
                  contribute to the success of a dynamic organization.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4>Expertise:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="itemList">
                    Change management, release notes, new feature development,
                    performance improvements, troubleshooting, knowledge base
                    articles, and transparent communication.
                  </li>
                  <li className="itemList">
                    Fluid transitions and carefully considered visual elements
                    that are simple to adapt and expand.
                  </li>
                  <li className="itemList">
                    Developed using React and Express.js, providing excellent
                    speed and adaptability for modern web applications.
                  </li>
                  <li className="itemList">
                    Works seamlessly with Bootstrap 5+, utilizing the newest
                    features and design principles.
                  </li>
                  <li className="itemList">
                    Created with Material UI components, delivering ready-to-use
                    UI elements that adhere to industry standards.
                  </li>
                  <li className="itemList">
                    Receive comprehensive Sketch UI files for each layout, ideal
                    for personalized design adjustments.
                  </li>
                  <li className="itemList">
                    Easily toggle between light and dark modes with personalized
                    theme options.
                  </li>
                  <li className="itemList">
                    Built with a mobile-first strategy, guaranteeing consistent
                    experiences on all device sizes.
                  </li>
                  <li className="itemList">
                    Enhanced for speed, user experience, and search engine
                    optimization, boosting site ranking and load times.
                  </li>
                  <li className="itemList">
                    Access dependable and prompt assistance from our support
                    team for help with setup and customization.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
