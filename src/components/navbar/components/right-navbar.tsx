"use client";
import { useEffect, useState } from "react";

const RightNavbar = () => {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    const updateHeadings = () => {
      const headingElements = Array.from(
        document.querySelectorAll("h1, h2, h3")
      ) as HTMLHeadingElement[];
      headingElements.forEach((heading, index) => {
        if (!heading.id) {
          heading.id = `heading-${index}`;
        }
      });
      setHeadings(headingElements);
    };

    updateHeadings();

    const observer = new MutationObserver(updateHeadings);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <aside className="sticky top-28 h-[calc(100vh-4rem)] w-48 hidden md:block text-sm">
      <div className="px-4 pb-4 overflow-hidden hover:overflow-y-auto">
        <p className="font-medium">On This Page</p>
        <ul className="list-none p-0">
          {headings.map((heading) => (
            <li key={heading.id} className="mt-2">
              <a
                href={`#${heading.id}`}
                className="no-underline hover:text-foreground text-muted-foreground"
              >
                {heading.textContent}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RightNavbar;
