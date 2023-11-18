import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem = ({category}: CategoryItemProps) => {
    return (
        <div className="flex w-[200px] flex-col rounded-md">
            <div className="rounded-tr-lg rounded-tl-lg h-[150px] flex items-center justify-center bg-gradient-to-r from-[#5033C3] to-purple-300">
                <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    style={{
                        objectFit: "contain",
                    }}
                />
            </div>
            <div className="rounded-br-lg rounded-bl-lg bg-accent py-3">
                <p className="pl-2 text-sm font-semibold text-center">{category.name}</p>
            </div>
        </div>
    );
}


 
export default CategoryItem;