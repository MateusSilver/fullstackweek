
import Image from "next/image";
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

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
    <Image src="/banner-home-01.png"
    height={0}
    width={0}
    className="h-auto w-full p-5"
    sizes="100vw"
    alt="até 55% de desconto esse mês!"
    />

    <div className="mt-8 mx-8">
      <h2 className="font-semibold my-8 uppercase">Categorias</h2>
      <Categories />
    </div>

    <div className="mt-8">
      <h2 className="font-semibold mx-8 my-8 uppercase">Ofertas</h2>
      <ProductList products={deals}/>
    </div>

    <Image src="/banner-home-02.png"
    height={0}
    width={0}
    className="h-auto w-full p-5"
    sizes="100vw"
    alt="até 50% de desconto em mouses!"
    />
    
    <div className="mt-8">
      <h2 className="font-semibold mx-8 my-8 uppercase">Teclados</h2>
      <ProductList products={keyboards}/>
    </div>

  </div>;
}
