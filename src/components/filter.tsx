"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { FilterGroup } from "./filter-group";
import { Title } from "./title";
import { FilterPrice } from "./filter-price";
import { getIngredients } from "@/services/ingredients";
import { Ingredient } from "@prisma/client";

interface Props {
  className?: string;
}

export const Filter: React.FC<Props> = (props) => {
  const { className } = props;
  const [prices, setPrices] = React.useState([0, 5000]);
  const [ingredients, setIngridents] = React.useState<Ingredient[]>([]);

  React.useEffect(() => {
    getIngredients().then((data) => setIngridents(data));
  }, []);

  const niceIngredients = ingredients.map((el) => ({
    name: el.name,
    value: el.id,
  }));

  return (
    <div className={cn("flex flex-col gap-5 ", className)}>
      <Title size={"m"}>Филтрация</Title>
      <FilterGroup
        items={[
          { name: 30, value: "маленькая" },
          { name: 40, value: "средная" },
          { name: 50, value: "большая" },
        ]}
        title={"Размеры:"}
      />
      <FilterPrice value={prices} setValue={setPrices} />
      <FilterGroup
        items={[
          { name: "Традиционное", value: 1 },
          { name: "Тонкое", value: 2 },
        ]}
        title={"Тип Теста:"}
      />
      <FilterGroup items={niceIngredients} title={"Ингридиенты:"} />
    </div>
  );
};
