import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
    return ( 
        <Image 
            src={props.src} 
            height={0} 
            width={0} 
            className="h-auto w-full p-5" 
            sizes="100vw" 
            alt={props.alt} 
        />
    );
}
 
export default PromoBanner;