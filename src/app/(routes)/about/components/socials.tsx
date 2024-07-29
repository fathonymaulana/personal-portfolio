import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
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
    <div className="flex items-center gap-4">
      <h1>SOCIAL LINKS</h1>
      <Separator orientation="vertical" />
      <div className="flex items-center">
        <SocialLink
          href="https://www.instagram.com/fathonymaulana/"
          icon={<InstagramLogoIcon width={18} height={18} />}
          label="Instagram"
        />
        <SocialLink
          href="https://github.com/fathonymaulana?tab=repositories"
          icon={<GitHubLogoIcon width={18} height={18} />}
          label="Github"
        />
        <SocialLink
          href="Discordapp.com/users/368839388353921024"
          icon={<DiscordLogoIcon width={18} height={18} />}
          label="Discord"
        />
        <SocialLink
          href="https://www.linkedin.com/in/fathony-maulana-96a2a71ba/"
          icon={<LinkedInLogoIcon width={18} height={18} />}
          label="LinkedIn"
        />
      </div>
    </div>
  );
};

export default Socials;
