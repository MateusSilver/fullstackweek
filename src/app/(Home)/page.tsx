
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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses"
      }
    }
  });

  return <div className="flex flex-col gap-12">
    <PromoBanner 
      src={"/banner-home-01.png"} 
      alt={"até 55% de desconto só esse mês"}
    />

    <div>
      <SessionTitle>Categorias</SessionTitle>
      <Categories />
    </div>

    <div>
      <SessionTitle>Ofertas</SessionTitle>
      <ProductList products={deals}/>
    </div>

    <PromoBanner 
      src={"/banner-home-02.png"} 
      alt={"55% de desconto em mouses"}
    />
    
    <div>
      <SessionTitle>Teclados</SessionTitle>
      <ProductList products={keyboards}/>
    </div>

    <PromoBanner 
      src={"/banner-home-03.png"} 
      alt={"Até 20% de desconto em fones"}
    />

    <div>
      <SessionTitle>Mouses</SessionTitle>
      <ProductList products={mouses}/>
    </div>

  </div>;
}
