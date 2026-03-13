"use client";

import { FC } from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Course: FC = () => {
  return (
    <>
      <div className="px-8 md:px-12 py-8 md:py-24 border-b border-border">
        <div className="px-0 md:px-8">
          <div className="flex items-start flex-col md:flex-row gap-8">
            <Image
              src="/images/logo/WPU.png"
              alt="Education"
              width={500}
              height={500}
              priority
              className="w-full h-auto object-contain max-w-[56px]"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3>WPU Course</h3>
                <p className="Small">MERN Stack Course</p>
                <p className="Smaller">2025-2026</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4>Course Overview:</h4>
                <p className="tableItem">
                  This course provides a comprehensive introduction to the MERN
                  stack, designed for aspiring web developers. Participants will
                  gain hands-on experience in building full-stack web
                  applications using MongoDB, Express.js, React, and Node.js.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h4>Key Skills:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li className="itemList">
                    Full-stack development, RESTful APIs, front-end
                    architecture, back-end logic, database solutions, version
                    control, Next.js, Tailwind CSS, and Vercel.
                  </li>
                  <li className="itemList">
                    Modular components to boost development and simplify
                    maintenance.
                  </li>
                  <li className="itemList">
                    Powered by the MERN stack: MongoDB, Express.js, React, and
                    Node.js.
                  </li>
                  <li className="itemList">
                    Integrates with CSS frameworks like Tailwind CSS.
                  </li>
                  <li className="itemList">
                    Styled using Material UI and Ant Design component libraries.
                  </li>
                  <li className="itemList">
                    Includes Figma files for smooth customization and
                    prototyping.
                  </li>
                  <li className="itemList">
                    Easily toggle between light and dark modes with personalized
                    theme options.
                  </li>
                  <li className="itemList">
                    Responsive design ensures seamless viewing on any device.
                  </li>
                  <li className="itemList">
                    Optimized for top performance and enhanced SEO visibility.
                  </li>
                  <li className="itemList">
                    Receive expert mentorship and support throughout your
                    journey.
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full flex flex-col gap-2">
              <h3>Certificate</h3>
              <a
                href="https://learn.wpucourse.id/certificate/STAMU61U"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Image
                  src="/images/certificates/wpucourse-certificate-STAMU61U.webp"
                  alt="WPU Course Certificate"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-auto object-contain rounded-lg transition-transform hover:scale-[1.02]"
                />
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                Verify the authenticity of this certificate{" "}
                <a
                  href="https://learn.wpucourse.id/certificate/STAMU61U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground font-medium hover:underline underline-offset-4"
                >
                  here
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
