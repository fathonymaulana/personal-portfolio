// pages/documentation.tsx

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast"; // Import useToast
import { ToastProvider } from "@/components/ui/toast";
import { FAQ } from "@/components/faq/faq";

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    toast({
      title: "Kode berhasil disalin!", // Customize message
      description: "Kode telah disalin ke clipboard.", // Customize description
    });
  };

  return (
    <div className="relative mb-4">
      <pre className="bg-foreground text-background p-4 rounded-lg">
        <code>{code}</code>
      </pre>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-[10px] right-[10px] text-background"
        onClick={copyToClipboard}
      >
        {isCopied ? (
          <Check width={14} height={14} />
        ) : (
          <Copy width={14} height={14} />
        )}
      </Button>
    </div>
  );
};

const Documentation: React.FC = () => {
  return (
    <ToastProvider>
      {" "}
      {/* Wrap with ToastProvider if required */}
      <div>
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight mb-4">
          Documentation
        </h1>

        <p className="mb-10 text-muted-foreground text-sm">
          Welcome to the documentation of my portfolio website. This website is
          built using modern technologies such as Next.js, shadcn/ui, and
          TypeScript. Here is a guide to understand how this website is built
          and how you can use it.
        </p>

        <Separator className="mb-10" />

        <h2 className="text-xl md:text-2xl mb-4 font-semibold tracking-tight">
          Installation
        </h2>
        <p className="mb-4">
          To run this project on your local environment, follow these steps:
        </p>
        <div className="font-light text-xs md:text-sm mb-10">
          <CodeBlock
            code={`git clone https://github.com/\nfathonymaulana/personal-portfolio.git\n\ncd personal-portfolio\nnpm install\nnpm run dev`}
          />
        </div>

        <h2 className="text-xl md:text-2xl mb-4 font-semibold tracking-tight">
          Usage
        </h2>
        <p className="mb-4">
          Here are some basic commands you can use to manage this project:
        </p>
        <div className="font-light text-xs md:text-sm mb-10">
          <CodeBlock
            code={`npm run dev\nnpm run build\nnpm start`}
          />
        </div>
        <p className="mb-10 text-xs text-muted-foreground rounded-lg border bg-card shadow p-8">
          <span className="font-semibold text-foreground">Notes:</span> For more
          information on how to use shadcn/ui and TypeScript in this project,
          please refer to the official documentation of each.
        </p>

        <Separator className="mb-10" />

        <FAQ />
      </div>
    </ToastProvider>
  );
};

export default Documentation;
