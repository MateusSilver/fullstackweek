import { ComponentProps } from "react";

const SessionTitle = ({children, ...props}: ComponentProps<"p">) => {
    return ( 
        <p className="mb-3 pl-5 font-bold uppercase" {...props}>{children}</p>
    );
}
 
export default SessionTitle;