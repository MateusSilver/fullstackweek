import ProductItem from "@/components/product-item";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({ params }: any) => {
    const category = await prismaClient.category.findFirst({
        where: {
            slug: params.slug
        },
        include: {
            products: true,
        },
    });
    if(!category){
        return null;
    }

    return (
        <div className="flex flex-col gap-8 p-5">
            <div className="flex items-center justify-center w-44 gap-1 text-base uppercase rounded-full border-solid border-2 px-3 py-[0.375rem]">
                {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
                {category.name}
            </div>

            <div className="py-8 flex flex-row gap-3 items-center flex-wrap justify-center">
                {category.products.map((product) => (
                    <ProductItem key={product.id} product={computeProductTotalPrice(product)}/>
                ))}
            </div>
        </div>
    )
}
 
export default CategoryProducts;