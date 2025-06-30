import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,
    {params}:{params:{id:string}}){
    const id = +params.id    
    const ingredient = await prisma.ingredient.findFirst({
        where:{
            id,
        }
    });
    return NextResponse.json(ingredient)
}