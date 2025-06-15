import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@ui/button";
import { Logo, Container, Search } from "@/components";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <header className={cn("", className)}>
      <Container className="flex items-center gap-5">
        <Logo />
        <Search className="flex-1" />
        <Button variant={"outline"}>barev</Button>
      </Container>
    </header>
  );
};
