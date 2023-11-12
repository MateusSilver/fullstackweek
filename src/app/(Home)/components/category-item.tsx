"use client";
import { Category } from "@prisma/client";
import { Badge, HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";

interface CategoryItemProps {
    category: Category;
}

const CategoryItem = ({category}:CategoryItemProps) => {
    const categoryIcon = {
        keyboards: <KeyboardIcon size={16} />,
        monitors: <MonitorIcon size={16} />,
        headphones: <HeadphonesIcon size={16} />,
        mousepads: <SquareIcon size={16} />,
        speakers: <SpeakerIcon size={16} />,
        mouses: <MouseIcon size={16} />
    };

    return ( 
        <div className="flex items-center justify-center border-solid border-2 gap-2 rounded-lg py-3">
            <Badge variant="outline">
                {categoryIcon[category.slug as keyof typeof categoryIcon]}
                <span className="text-xs font-bold">{category.name}</span>
            </Badge>
        </div>
    );
}

export default CategoryItem;