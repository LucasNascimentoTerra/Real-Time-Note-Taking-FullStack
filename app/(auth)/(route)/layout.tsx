import { ReactNode } from "react";

const  rootLayout= ({
    children
}:{
    children:ReactNode;
}) => {
    return ( 
    <div className="h-full bg-red-500 text-white">
        {children}
    </div>
     );
}
 
export default rootLayout;