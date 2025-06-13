import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <header className={cn("", className)}>
      <Button>barev</Button>
    </header>
  );
};
