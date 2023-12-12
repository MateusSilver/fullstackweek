"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
    name: string;
    imageUrls: string[];
}

const ProductImages = ({imageUrls, name}: ProductImagesProps) => {
    const [currentImage, setCurrentImage] = useState(imageUrls[0]);

    const handleImageClick = (image: string) => {
        setCurrentImage(image)
    }

    return ( 
        <div className="flex flex-col">
            <div className="flex bg-accent h-[380px] w-full items-center justify-center">
                <Image 
                    src={currentImage} 
                    alt={name} 
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto max-h-[70%] w-auto max-w-[80%]"
                    style={{
                            objectFit: 'contain'
                    }}
                />
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-4 mt-8 px-5">
                {imageUrls.map((image) => (
                    <button key={image} className={
                        `bg-accent rounded-lg flex justify-center w-[170px] items-center h-[120px]
                            ${currentImage === image && 
                                'border-2 border-primary border-solid border-purple-500'
                            }
                    `} onClick={()=> handleImageClick(image)}>
                        <Image
                        src={image}
                        alt={name}
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="h-auto max-h-[70%] w-auto max-w-[80%]"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}
 
export default ProductImages;