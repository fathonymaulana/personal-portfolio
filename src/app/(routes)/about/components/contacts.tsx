import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Socials from "./socials";

const Contacts = () => {
  return (
    <>
      <div className="space-y-10">
        <div className="space-y-4">
          <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
            Contacts
          </h1>
          <p className="text-base text-muted-foreground">
            Get in touch with me anytime, through social media, e-mail, or phone
            number.
          </p>
        </div>
        <div className="space-y-4">
          <p>
            Just a friendly reminder that the information provided here is for{" "}
            <strong>business purposes only</strong>. If you have any questions,
            feel free to chat with me directly on my social media.
          </p>
          <p>I appreciate your understanding in using this responsibly.</p>
        </div>
        <Separator />
        <div className="space-y-4">
          <h2 className="font-semibold">E-Mail</h2>
          <div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <div className="text-base font-semibold">Gmail</div>
                <div className="text-xs">
                  Receive emails about your account activity and security.
                </div>
              </div>
              <div>
                <Button>
                  <Link
                    href="mailto:maulanafathony@gmail.com"
                    target="_blank"
                    className="flex items-center gap-1"
                  >
                    <SquareArrowOutUpRight width={14} height={14} />
                    Open
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            <strong>Notes:</strong> If you need any further information, such as
            my phone number, please do not hesitate to send me an email first.
          </p>
        </div>
        <Separator />
        <div className="space-y-4">
          <p>
            If you want to find me on social media, just search for{" "}
            <code>@fathonymaulana</code>. That&apos;s my username on almost all
            platforms, so it should be easy to find me.
          </p>
          <p>
            But if you&apos;re short on time, I&apos;ve included some links to the social
            media platforms I use most frequently below.
          </p>
        </div>
        <Socials />
      </div>
    </>
  );
};

export default Contacts;
