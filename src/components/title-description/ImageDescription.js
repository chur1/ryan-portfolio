import React from 'react';
import Image from 'next/image';
import styles from "./ImageDescription.module.scss";

const ImageDescription = ({   
    orientation, 
    image,
    text
}) => {
    if(orientation == "left"){
        return(
            <div className={styles['left-whole-container']}>
            <div className={styles['left-image']}>
                <Image
                    alt="image"
                    src={image}
                    width={200}
                    height={200}
                />
            </div>
            <div className={styles['left-description']}>
                <h4 className={styles['left-text']}>{text}</h4>
            </div>
        </div>
        )
    }
    if (orientation == "right")
        return(
            <div className={styles['right-whole-container']}>
                <div className={styles['right-description']}>
                    <h4 className={styles['right-text']}>{text}</h4>
                </div>
                <div className={styles['right-image']}>
                    <Image
                        alt="image"
                        src={image}
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        )
}

export default ImageDescription;