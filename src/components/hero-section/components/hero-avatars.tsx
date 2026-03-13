import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface AvatarTooltipProps {
  src: string;
  alt: string;
  fallback: string;
  name: string;
  role: string;
}

const AvatarTooltip: React.FC<AvatarTooltipProps> = ({ src, alt, fallback, name, role }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Avatar className="hover:z-10 border-4 border-background">
          <AvatarImage src={src} alt={alt} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-semibold">{name}</p>
        <small>{role}</small>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const HeroAvatars: React.FC = () => {
  const avatars = [
    { src: "https://ui.shadcn.com/avatars/01.png", alt: "@shadcn", fallback: "AS", name: "Alice Smith", role: "Product Manager" },
    { src: "https://ui.shadcn.com/avatars/02.png", alt: "@shadcn", fallback: "WS", name: "William Smith", role: "Team Leader" },
    { src: "https://ui.shadcn.com/avatars/03.png", alt: "@shadcn", fallback: "BJ", name: "Bob Johnson", role: "TQA" },
    { src: "https://ui.shadcn.com/avatars/04.png", alt: "@shadcn", fallback: "ED", name: "Emily Davis", role: "Product Manager" },
    { src: "https://ui.shadcn.com/avatars/05.png", alt: "@shadcn", fallback: "SB", name: "Sarah Brown", role: "Admin" },
  ];

  return (
    <div className="flex items-center justify-end -space-x-4">
      {avatars.map((avatar, index) => (
        <AvatarTooltip key={index} {...avatar} />
      ))}
    </div>
  );
};

export default HeroAvatars;
