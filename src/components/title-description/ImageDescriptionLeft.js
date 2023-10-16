import React from 'react';
import Image from 'next/image';


const ImageDescriptionLeft = ({    
    image,
    text
}) => {
    return(
        <div>
            <div>
                <Image
                    alt="image"
                    src={image}
                    width={200}
                    height={200}
                />
            </div>
            <div>
                <h1>{text}</h1>
            </div>
        </div>
        
    )
}

export default ImageDescriptionLeft;