import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Check, Copy } from "lucide-react";
import React, { useState } from "react";
import ProjectDemo from "./project-demo";
import { Separator } from "@/components/ui/separator";

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

const Projects = () => {
  return (
    <>
      <div className="space-y-2">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
          Projects
        </h1>
        <p className="text-base text-muted-foreground">
          Showcase of my frontend related work
        </p>
      </div>
      <div className="pb-12 pt-8 space-y-8">
        <div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tighter">
              Online Store Pre-order Web App Development
            </h2>
            <p className="text-muted-foreground text-sm">
              This application was designed to simplify the process of ordering
              favorite foods from various stores.
            </p>
          </div>
          <ul className="list-disc ml-4 py-4 text-sm text-muted-foreground">
            <li>
              Market Research: Conducted in-depth market research to identify
              user needs and preferences.
            </li>
            <li>
              UI/UX Design: Created an intuitive and visually appealing user
              interface and user experience.
            </li>
            <li>
              Development: Built the application using React, Tailwind CSS,
              Next.JS, and shadcn/ui for a robust and scalable solution.
            </li>
            <li>
              WhatsApp Integration: Integrated WhatsApp functionality to allow
              users to easily share product details, prices, and links directly
              with their contacts.
            </li>
          </ul>
        </div>

        <Separator />

        <div className="space-y-1">
          <p className="font-semibold tracking-tight">Result:</p>
          <p className="text-muted-foreground text-sm">
            The application was successfully launched and received positive
            feedback from users.
          </p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold tracking-tight">Lesson Learned</p>
          <p className="text-muted-foreground text-sm">
            The importance of thorough testing before launch was emphasized.
          </p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold tracking-tight">Conclusion:</p>
          <p className="text-muted-foreground text-sm">
            This project successfully demonstrated how a web application can be
            an effective solution to meet the needs of the community.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-2xl font-semibold tracking-tighter">
            Order Form Components:
          </p>
          <div className="w-full text-xs md:text-sm">
            <CodeBlock
              code={`TypeScript\n\nimport { useState } from 'react';\nimport { Button, Input } from 'shadcn/ui';\n\nfunction OrderForm() {\n  const [formData, setFormData] = useState({\n    name: '',\n    email: '',\n    product: '',\n    quantity: 1,\n  });\n\nconst handleChange = (e) => {\n  setFormData({ ...formData, \n  [e.target.name]: e.target.value });\n};\n\nconst handleSubmit = (e) => {\n  e.preventDefault();\n  // Logic untuk mengirim data ke WhatsApp API\n   ...`}
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <div className="space-y-2 mb-8">
            <p className="text-2xl font-semibold tracking-tighter">
              Live Example:
            </p>
            <p className="text-muted-foreground text-sm">
              Want to see something cool? Click this Image or live demo button.
            </p>
          </div>
          <ProjectDemo />
        </div>
      </div>
    </>
  );
};

export default Projects;
