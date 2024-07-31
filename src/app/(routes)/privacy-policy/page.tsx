import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="container py-8 md:py-32 px-8 md:px-80 space-y-16 text-justify">
        <div className="w-full text-center space-y-6">
          <p className="text-sm">Effective date: January 10, 2024</p>
          <h1 className="text-7xl tracking-tighter">Privacy Policy</h1>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">Introduction</h3>
          <p className="italic">
            This Privacy Policy outlines the types of information we collect,
            how we use it, and the choices you have about that information. By
            accessing or using our website, you agree to this Privacy Policy.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">Information We Collect</h3>
          <p>We may collect the following information:</p>
          <ul className="list-decimal pl-4 text-sm text-muted-foreground">
            <li>
              Personal information: This may include your name, email address,
              and other information you voluntarily provide when you contact us
              or submit a form on our website.
            </li>
            <li>
              Usage data: We may collect information about how you use our
              website, such as the pages you visit, the links you click, and how
              you arrived at our site.
            </li>
            <li>
              Device information: We may collect information about the device
              you use to access our website, such as your IP address, browser
              type, and operating system.
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">How We Use Your Information</h3>
          <p>We may use your information to:</p>
          <ul className="list-decimal pl-4 text-sm text-muted-foreground">
            <li>
              Provide and improve our services: We use your information to
              provide you with the services you request, such as responding to
              your inquiries or providing you with information about our work.
            </li>
            <li>
              Personalize your experience: We may use your information to
              personalize your experience on our website and to provide you with
              content that is relevant to your interests.
            </li>
            <li>
              Communicate with you: We may use your information to communicate
              with you about our services, updates, and promotions.
            </li>
            <li>
              Analyze website usage: We may use your information to analyze how
              our website is used so that we can improve its functionality and
              content.
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">Data Security</h3>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, and destruction.
            However, no method of transmission over the Internet or electronic
            storage is completely secure.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">Your Choices</h3>
          <p>You have the following choices regarding your information:</p>
          <ul className="list-decimal pl-4 text-sm text-muted-foreground">
            <li>
              Access and correction: You can request access to the personal
              information we hold about you and request that any inaccuracies be
              corrected.
            </li>
            <li>
              Opt-out: You may opt out of receiving marketing communications
              from us at any time by following the unsubscribe instructions in
              our emails.
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl">Changes to this Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new Privacy Policy on our
            website.
          </p>
        </div>
        <div className="flex flex-col space-y-2">
          <strong>
            If you have any questions about this Privacy Policy, please contact
            us at maulanafathony@gmail.com.  
          </strong>
          <strong>Fathony Maulana</strong>
          <strong>fathonymaulana.vercel.app</strong>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
