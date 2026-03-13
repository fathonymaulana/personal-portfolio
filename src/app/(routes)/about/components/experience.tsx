"use client";

import { Separator } from "@/components/ui/separator";
import React, { FC } from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  duties: string[];
}

const ExperienceItem: FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  duties,
}) => (
  <div>
    <div className="space-y-1">
      <h4 className="text-2xl tracking-tighter font-semibold leading-none">{title}</h4>
      <p className="text-sm text-muted-foreground">{company}</p>
    </div>
    <Separator className="my-4" />
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div className="text-xs text-muted-foreground">{period}</div>
    </div>
    <ul className="list-disc ml-4 py-4 text-sm text-muted-foreground">
      {duties.map((duty, index) => (
        <li key={index}>
          <span>{duty}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Experience: FC = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Experience
        </h1>
        <p className="text-base text-muted-foreground">
          All about my freelance and professional work Experience.
        </p>
      </div>

      <div className="pb-12 pt-8 space-y-8">
        <Separator />
        <div className="space-y-8">
          <p className="text-base">
            I have 2 years of Experience as a Frontend Developer. During this
            time, I have worked on various projects involving the creation of
            responsive and interactive user interfaces. I am skilled in using
            technologies such as <code>HTML</code>, <code>CSS</code>, <code>JavaScript</code>, and frameworks like
            <code>React</code> and <code>Next.js</code>.
          </p>
          <p className="text-base">
            Additionally, I have Experience working in teams, following Agile
            methodologies, and using tools like Git for version control.
          </p>
        </div>
        <ExperienceItem
          title="Frontend Developer"
          company="Upwork.com"
          period="Dec 2022 - Present"
          duties={[
            "Developed and maintained web applications using React.js and TypeScript.",
            "Enhanced application performance by optimizing code and reducing bundle size.",
            "Collaborated with backend teams to integrate RESTful APIs.",
            "Implemented responsive designs using CSS Grid and Flexbox.",
            "Authored technical documentation for developed applications.",
          ]}
        />
        <ExperienceItem
          title="Middle IT TQA"
          company="PT. Mandiri International Technology | PT. Bank Mandiri Tbk. (persero) as Client"
          period="Dec 2019 - Nov 2022"
          duties={[
            "Developed comprehensive test plans and strategies to ensure thorough coverage of all functional and non functional requirements for banking applications.",
            "Created detailed test cases and scenarios, executed manual and automated tests, and ensured alignment with project specifications.",
            "Identified, documented, and tracked software defects using tools like JIRA and collaborated with developers to ensure timely resolution.",
            "Conducted regression testing to validate that new code changes do not adversely affect existing functionality.",
            "Coordinated UAT efforts with business stakeholders to ensure the software meets user requirements and is ready for deployment.",
            "Conducted performance and load testing to ensure the applications can handle high volumes of transactions and users.",
            "Generated and analyzed quality metrics to monitor the testing process and provide actionable insights to stakeholders.",
            "Worked closely with cross functional teams including developers, product managers, and business analysts to ensure alignment on project goals and quality standards.",
            "Implemented process improvements and testing best practices to enhance efficiency and effectiveness of the QA process.",
            "Provided training and mentorship to junior testers, fostering a culture of quality and continuous learning within the team.",
          ]}
        />
      </div>
    </>
  );
};

export default Experience;
