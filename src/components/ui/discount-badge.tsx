import { ArrowDownIcon } from "lucide-react";
import { BadgeProps, Badge } from "./badge";
import { twMerge } from "tailwind-merge";

const DiscountBadge = ({children, className, ...props}: BadgeProps) => {
    return ( 
        <Badge className={twMerge("flex flex-row items-center px-1 py-[2px] rounded-full bg-purple-500 text-white", className)} {...props}>
            <ArrowDownIcon size={14}/>
            {children}%
        </Badge>
    );
}
 
export default DiscountBadge;