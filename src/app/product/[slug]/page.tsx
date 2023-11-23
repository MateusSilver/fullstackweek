import { prismaClient } from "@/lib/prisma"
import ProductImages from "./components/product-images"
import ProductInfo from "./components/product-info"
import { computeProductTotalPrice } from "@/helpers/product"
import ProductList from "@/components/ui/product-list"
import SessionTitle from "@/app/(Home)/components/session-title"

interface ProductDetailsPageProps {
    params: {
        slug: string
    }
}

const ProductDetailsPage = async ({params: {slug}} : ProductDetailsPageProps) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug,
        },
        include: {
            category: {
                include: {
                    products: {
                        where: {
                            slug: {
                                not: slug,
                            }
                        }
                    }
                },
            },
        }
    })

    if(!product) return null;

    return( 
        <div className="flex flex-col gap-8 pb-12">
            <ProductImages name={product.name} imageUrls={product.imageUrls} />
            <ProductInfo product={computeProductTotalPrice(product)}/>
            <div>
                <SessionTitle>Produtos relacionados</SessionTitle>
                <ProductList products={product.category.products} />
            </div>
            
        </div>
    )
}
 
export default ProductDetailsPage;