"use client";
import { CATEGORY_ICON } from "@/constants/category-icon";
import { Category } from "@prisma/client";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem = ({category}:CategoryItemProps) => {
    return ( 
        <div className="flex items-center justify-center border-solid border-2 gap-2 rounded-lg py-3">
            {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
            <span className="text-xs font-bold">{category.name}</span>
        </div>
    );
}

export default CategoryItem;