import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import React from "react";

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={href} target="_blank">
          <Button variant="ghost" size="icon">
            {icon}
          </Button>
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const Socials: React.FC = () => {
  return (
    <div className="flex items-center">
      <SocialLink
        href="https://x.com/maulanafathony"
        icon={<FaXTwitter size={16} />}
        label="X (Twitter)"
      />
      <SocialLink
        href="https://www.linkedin.com/in/fathony-maulana-96a2a71ba/"
        icon={<LinkedInLogoIcon width={18} height={18} />}
        label="LinkedIn"
      />
    </div>
  );
};

export default Socials;
