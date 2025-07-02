import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@ui/button";
import { Logo } from "@/components";
import { Search } from "./search";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <header className={cn("", className)}>
      <Container className="flex items-center gap-3">
        <Logo />
        <Search className="flex-1" />
        <Button variant={"outline"}>
          <span>Войти</span>
        </Button>
        <Button>
          <span>520$</span>|<span>3</span>
        </Button>
      </Container>
    </header>
  );
};
