"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Search } from "./search";
import { getProducts } from "@/services/products";
import { Product } from "@prisma/client";
import Link from "next/link";

interface Props {
  className?: string;
}

export const SearchHeader: React.FC<Props> = (props) => {
  const { className } = props;
  const [products, setProducts] = React.useState<Product[]>([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const res = await fetch(
        "http://localhost:3000/api/products?search=" + searchValue
      );
      const data = await res.json();
      setProducts(data);
    })();
  }, [searchValue]);

  return (
    <>
      <div className="fixed bg-black/50 inset-0 z-50"></div>
      <div className={cn("relative z-50", className)}>
        <Search value={searchValue} setValue={setSearchValue} />
        <ul className="absloute w-full bg-white p-2 rounded-2xl">
          {products.map((el) => (
            <li key={el.id} className="hover:bg-primary/50 rounded-[5px]">
              <Link
                className="flex items-center gap-2"
                href={`/product/${el.id}`}
              >
                <img src={el.imgUrl} alt={el.name} width={30} height={30} />
                {el.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
