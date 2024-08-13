import ProductList from "@/components/ui/product-list";
import { prismaClient } from "@/lib/prisma";
import SessionTitle from "../(Home)/components/session-title";


const Ofertas = async () => {
    const deals = await prismaClient.product.findMany({
        where: {
          discountPercentage: {
            gt: 0,
          }
        }
      });

    return ( 
        <div className="mt-8">
        <SessionTitle >Ofertas</SessionTitle>
        <div className="mt-8">
            <ProductList products={deals} />
        </div>
        </div>
    );
}

export default Ofertas;