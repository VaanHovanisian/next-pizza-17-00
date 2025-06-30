import { hashSync } from "bcrypt";
import { prisma } from "./prisma-client";
import { categories, ingredients, products } from "./constants";

async function create() {
  const user1 = await prisma.user.create({
    data: {
      email: "worldOFTanks@gmail.com",
      fullName: "Jason Stetxem",
      password: hashSync("goodGame", 10),
      verified: new Date(),
    },
  });
  const user2 = await prisma.user.create({
    data: {
      email: "worldOFTank@gmail.com",
      fullName: "Hills  Jon",
      password: hashSync("barev", 10),
      verified: new Date(),
      role: "ADMIN",
    },
  });
  await prisma.category.createMany({
    data: categories,
  });
  await prisma.product.createMany({
    data: products,
  });
  await prisma.ingredient.createMany({
    data: ingredients,
  });

  const pizza1 = await prisma.product.create({
    data: {
      imgUrl: "pizza1.avif",
      name: "Ծովախեցգետին և պեստո",
      ingredients: { connect: ingredients.slice(0, 5) },
      categoryId: 1,
    },
  });
  const pizza2 = await prisma.product.create({
    data: {
      imgUrl: "/pizza2.avif",
      name: "С гавайским манго",
      ingredients: { connect: ingredients.slice(5, 10) },
      categoryId: 2,
    },
  });
  const pizza3 = await prisma.product.create({
    data: {
      imgUrl: "/pizza3.avif",
      name: "Креветки и песто",
      ingredients: { connect: ingredients.slice(10, 15) },
      categoryId: 3,
    },
  });
}

async function reset() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE `;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE `;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE `;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE `;
}
async function main() {
  try {
    await reset();
    await create();
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
