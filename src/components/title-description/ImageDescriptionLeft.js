import React from 'react';
import Image from 'next/image';
import styles from "./ImageDescriptionLeft.module.scss";

const ImageDescriptionLeft = ({    
    image,
    text
}) => {
    return(
        <div className={styles['whole-container']}>
            <div className={styles['image']}>
                <Image
                    alt="image"
                    src={image}
                    width={200}
                    height={200}
                />
            </div>
            <div className={styles['description']}>
                <h4 className={styles['text']}>{text}</h4>
            </div>
        </div>
        
    )
}

export default ImageDescriptionLeft;