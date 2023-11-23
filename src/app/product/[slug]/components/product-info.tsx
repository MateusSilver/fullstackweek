"use client";
import { Button } from "@/components/ui/button";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductInfoProps {
    product: Pick<
        ProductWithTotalPrice,
        "basePrice"
        | "description"
        | "discountPercentage"
        | "totalPrice"
        | "name"
    >
}

const ProductInfo = ({product: {basePrice,description, discountPercentage, totalPrice, name}}: ProductInfoProps) => {
    const [quantity, setQuantity] = useState(1);
    const handleDecreaseQuantityClick = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1));
    }
    const handleIncreaseQuantityClick = () => {
        setQuantity((prev) => prev + 1);
    }

    return ( 
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{name}</h2>
            
            <div className="flex flex-row items-center gap-2">
                <h1 className="text-2xl font-bold">R$ {Number(totalPrice).toFixed(2)} </h1>
                {discountPercentage > 0 && (
                    <div className="flex flex-row items-center px-2 py-[2px] rounded-full bg-purple-500 text-white">
                        <ArrowDownIcon size={14}/>
                        {discountPercentage}%
                    </div>
                )}
            </div>
            {discountPercentage > 0 && (
                <p className="text-xm opacity-75">De: <span className="line-through">R$ {Number(basePrice).toFixed(2)}</span></p>
            )}
            <div className="flex items-center gap-2">
                <Button size="icon" variant={"outline"} onClick={handleDecreaseQuantityClick}>
                    <ArrowLeftIcon size={16}/>
                </Button>
                <span>{quantity}</span>
                <Button size="icon" variant={"outline"} onClick={handleIncreaseQuantityClick}>
                    <ArrowRightIcon size={16}/>
                </Button>
            </div>
            <div className="flex flex-col gap-3 mt-8">
                <h3 className="font-bold">Descrição</h3>
                <p className="text-sm opacity-60">{description}</p>
            </div>
            <Button className="mt-8 font-bold uppercase bg-purple-800 hover:bg-purple-500">Adicionar ao Carrinho</Button>
            <div className="bg-accent flex px-5 py-2 justify-between w-[400px] rounded-lg my-3">
                <div className="flex items-center gap-3">
                    <TruckIcon />
                    <div className="flex flex-col">
                        <p className="Text-xs">
                            Entrega via <span className="font-semibold">FSPacket&copy;</span>
                        </p>
                        <p className="text-xs text-[#8162ff]">Envio para <span className="font-semibold">todo o Brasil</span></p>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="text-xs font-bold">Frete Grátis</p>
                </div>
            </div>
        </div>
    );
}
 
export default ProductInfo;