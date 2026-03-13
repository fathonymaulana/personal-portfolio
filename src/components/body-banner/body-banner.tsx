import { Button } from "../ui/button";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

const BodyBanner = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-32 py-24 md:py-32 flex items-center justify-center w-full border-b border-border"
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-start justify-center p-8 md:p-16 bg-foreground text-background rounded-2xl">
        <div className="w-full">
          <Badge variant="secondary" className="text-[10px]">
            Get in touch
          </Badge>
        </div>
        <div className="w-full space-y-4">
          <div className="text-4xl leading-tight tracking-tighter font-semibold">
            <h2 className="text-muted-foreground capitalize">Have an idea?</h2>
            <h1 className="capitalize">Let&apos;s do it together!</h1>
          </div>
          <p className="tableItem">
            Don&apos;t put your creativity on hold and let&apos;s build a
            professional web experience which will put you above your
            competitors.
          </p>
          <Link href="/about/Contacts" className="flex">
            <Button
              variant="secondary"
              size="lg"
              className="w-full md:w-fit flex items-center gap-2"
            >
              Contact
              <ChatBubbleIcon width={14.39} height={14.39} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BodyBanner;
