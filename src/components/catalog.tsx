"use client";
import React from "react";
import { cn } from "@/lib/utils";

import { Title } from "./title";
import { Card } from "./card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "@/store/category";

interface Props {
  className?: string;
  items: any[];
  title: string;
  id: number;
}

export const Catalog: React.FC<Props> = (props) => {
  const { className, items, title, id } = props;
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.5,
  });

  const setActiveCategory = useCategoryStore(
    (state) => state.setActiveCategory
  );
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategory(id);
    }
  }, [intersection?.isIntersecting]);
  return (
    <div className={className} ref={intersectionRef} id={title}>
      <Title size={"l"}>{title}</Title>
      <ul className="grid grid-cols-3">
        {items.map((el) => (
          <li key={el.id}>
            <Card
              title={"Сырный цыпленок"}
              imgUrl={"/pizza1.png"}
              text={[
                { name: "Цыпленок" },
                { name: "моцарелла" },
                { name: "сыры чеддер и пармезан" },
                { name: "сырный соус" },
                { name: "томаты" },
                { name: "соус альфредо" },
                { name: "чеснок" },
              ]}
              price={395}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
