"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { Title } from "./title";
import { Card } from "./card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";
import { ProductRelation } from "@/@types/prisma";

interface Props {
  className?: string;
  items: ProductRelation[];
  title: string;
  id: number;
}

export const Catalog: React.FC<Props> = (props) => {
  const { className, items, title, id } = props;
  const intersectionRef = React.useRef<HTMLDivElement | null>(null);
  const intersection = useIntersection(
    intersectionRef as React.RefObject<HTMLElement>,
    {
      threshold: 0.3,
    }
  );

  const setActiveCategory = useCategoryStore(
    (state) => state.setActiveCategory
  );
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategory(id);
    }
  }, [intersection?.isIntersecting]);
  return (
    <div className={cn("", className)} ref={intersectionRef} id={title}>
      <Title size={"l"}>{title}</Title>
      <ul className="grid grid-cols-3">
        {items.map((el) => (
          <li key={el.id}>
            <Card
              title={el.name}
              imgUrl={el.imgUrl}
              text={el.ingredients}
              price={el.variants[0].price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
