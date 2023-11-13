
import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import SessionTitle from "./components/session-title";
import PromoBanner from "./components/Promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards"
      }
    }
  });

  return <div>
    <PromoBanner 
      src={"/banner-home-01.png"} 
      alt={"até 55% de desconto só esse mês"}
    />

    <div className="mt-8">
      <SessionTitle>Categorias</SessionTitle>
      <Categories />
    </div>

    <div className="mt-8">
      <SessionTitle>Ofertas</SessionTitle>
      <ProductList products={deals}/>
    </div>

    <PromoBanner 
      src={"/banner-home-02.png"} 
      alt={"55% de desconto em mouses"}
    />
    
    <div className="mt-8">
      <SessionTitle>Teclados</SessionTitle>
      <ProductList products={keyboards}/>
    </div>

  </div>;
}
