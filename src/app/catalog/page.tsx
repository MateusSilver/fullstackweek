import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";
import { prismaClient } from "@/lib/prisma";

const CatalogPage = async () => {
    const categories = await prismaClient.category.findMany({});
    return (
        <div className="p-5 flex flex-col gap-8">
            <div className="flex items-center justify-center w-44 gap-1 text-base uppercase rounded-full border-solid border-2 px-3 py-[0.375rem]">
                <ShapesIcon size={16} />
                Catálogo
            </div>
            <div className="py-8 flex flex-row gap-3 items-center flex-wrap justify-center">
                {categories.map((category) => (
                    <CategoryItem key={category.id} category={category}/>
                ))}
            </div>
        </div>
    );
}
 
export default CatalogPage;