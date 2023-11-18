import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";

interface ProductItemProps {
    product: ProductWithTotalPrice;
}

const ProductItem = ({product}: ProductItemProps) => {
    return <div className="flex flex-col gap-4 max-w-[180px]">
        <div className=" relative bg-accent rounded-lg h-[170px] w-[170px] flex items-center justify-center">
            <Image 
            src={product.imageUrls[0]}
            alt={product.name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-auto max-h-[70%] max-w-[80%]"
            style={{
                objectFit: "contain",
                
            }}
            />
            {product.discountPercentage > 0 && (
                <div className="absolute flex flex-row items-center left-3 top-3 bg-violet-500 text-gray-50 rounded-full p-1">
                    <ArrowDownIcon size={14}/>{product.discountPercentage}%
                </div>
            )}
        </div>
        
        <div className="flex flex-col gap-1">
            <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm ">{product.name}</p>
            <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                {product.discountPercentage > 0 ? (
                    <>
                        <p className="font-semibold">R$ {product.totalPrice.toFixed(2).replace('.',',')}</p>
                        <p className="line-through text-xs opacity-75">R$ {Number(product.basePrice).toFixed(2).replace('.',',')}</p>
                    </>
                ) : (
                    <p className="font-semibold text-xs">R$ {product.totalPrice.toFixed(2).replace('.',',')}</p>
                )}
            </div>
        </div>
    </div>
}
 
export default ProductItem;