"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Search, SearchIcon, ArrowRight, CircleDashed } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SearchButtonProps {
  isMobileDrawer?: boolean;
}

const SearchButton: React.FC<SearchButtonProps> = ({ isMobileDrawer }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const handleSelect = (path: string) => {
    router.push(path);
    setOpen(false);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (!search) {
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const timeout = setTimeout(() => {
      setIsSearching(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="w-full flex-1 md:w-auto md:flex-none">
      <Button
        variant="outline"
        size={isMobileDrawer ? "default" : "sm"}
        className={
          isMobileDrawer
            ? "flex h-10 pr-12 w-full justify-start bg-transparent text-muted-foreground border-border hover:bg-muted"
            : "relative hidden md:inline-flex pr-12 w-full justify-start md:w-40 lg:w-64 bg-primary-foreground"
        }
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
          <Search className="w-4 h-4 shrink-0" />
          {isMobileDrawer ? (
            <span>Search...</span>
          ) : (
            <>
              <span className="hidden lg:inline-flex">
                Search documentation...
              </span>
              <span className="inline-flex lg:hidden">Search...</span>
            </>
          )}
        </div>
        {!isMobileDrawer && (
          <kbd className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        )}
      </Button>

      {!isMobileDrawer && (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="inline-flex md:hidden"
                onClick={() => setOpen(true)}
              >
                <SearchIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent showArrow>
              <p className="Smaller">Search</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search documentation..."
          value={search}
          onValueChange={setSearch}
          isLoading={isSearching}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem
              onSelect={() => handleSelect("/work")}
              className="text-foreground"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              <span>Work</span>
            </CommandItem>
            <CommandItem
              onSelect={() => handleSelect("/about")}
              className="text-foreground"
            >
              <ArrowRight className="mr-2 h-4 w-4" />
              <span>About</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Sections">
            <CommandItem
              onSelect={() => handleSelect("/#hero")}
              className="text-foreground"
            >
              <CircleDashed className="mr-2 h-4 w-4" />
              <span>Hero</span>
            </CommandItem>
            <CommandItem
              onSelect={() => handleSelect("/#work")}
              className="text-foreground"
            >
              <CircleDashed className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </CommandItem>
            <CommandItem
              onSelect={() => handleSelect("/#experience")}
              className="text-foreground"
            >
              <CircleDashed className="mr-2 h-4 w-4" />
              <span>Experience</span>
            </CommandItem>
            <CommandItem
              onSelect={() => handleSelect("/about")}
              className="text-foreground"
            >
              <CircleDashed className="mr-2 h-4 w-4" />
              <span>Education</span>
            </CommandItem>
            <CommandItem
              onSelect={() => handleSelect("/#about")}
              className="text-foreground"
            >
              <CircleDashed className="mr-2 h-4 w-4" />
              <span>Skills & Tools</span>
            </CommandItem>
            <CommandItem
              onSelect={() => handleSelect("/#contact")}
              className="text-foreground"
            >
              <CircleDashed className="mr-2 h-4 w-4" />
              <span>Contacts</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
};

export default SearchButton;
