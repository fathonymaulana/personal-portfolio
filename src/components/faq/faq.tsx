import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <>
      <h2 className="text-xl md:text-2xl mb-4 font-semibold tracking-tight">
        FAQ
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do I add a new page?</AccordionTrigger>
          <AccordionContent>
            To add a new page, create a .tsx file in the <code className="font-semibold text-foreground">pages</code>{" "}
            folder. For example, to create an about page, create{" "}
            <code className="font-semibold text-foreground">pages/about.tsx</code>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How can I contact you for freelance projects?
          </AccordionTrigger>
          <AccordionContent>
            You can contact me through my Upwork profile or via the email listed
            on the contact page of this website.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How can I contribute to this project?
          </AccordionTrigger>
          <AccordionContent>
            If you would like to contribute, please fork this repository, make
            your changes, and create a pull request. I will review and merge the
            changes if appropriate.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
