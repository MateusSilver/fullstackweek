import { CartProduct } from "@/providers/cart";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";

interface CartItemProps {
    product: CartProduct;
}

const CartItem = ({product} : CartItemProps) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
                    <Image 
                        src={product.imageUrls[0]} 
                        alt={product.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-auto w-auto max-h-[70%] max-w-[80%]"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-xs">{product.name}</p>
                        <div className="flex items-center gap-1">
                            <p className="font-bold text-sm">R$ {Number(product.totalPrice).toFixed(2)}</p>
                            {product.discountPercentage > 0 && (
                                <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button size="icon" variant={"outline"} className="h-8 w-8">
                            <ArrowLeftIcon size={12}/>
                        </Button>
                        <span className="text-xs">{product.quantity}</span>
                        <Button size="icon" variant={"outline"} className="h-8 w-8">
                            <ArrowRightIcon size={12}/>
                        </Button>
                    </div>
                </div>
            </div>
            <Button size="icon" variant="outline" >
                <TrashIcon size={16} />
            </Button>
        </div>
    );
}
 
export default CartItem;