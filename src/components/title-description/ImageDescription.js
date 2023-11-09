import React from 'react';
import Image from 'next/image';
import styles from "./ImageDescription.module.scss";

const ImageDescription = ({   
    orientation, 
    title,
    image,
    date,
    text,
}) => {
    if(orientation == "left"){
        return(
            <div className={styles['left-whole-container']}>
                <div className={styles['container-contents']}>
                    <div className={styles['left-image']}>
                        <div className={styles['imageTitle']}>
                            <Image
                                className={styles['Image']}
                                alt="image"
                                src={image}
                                width={50}
                                height={50}
                            />
                            <h3 className={styles['title']}>{title}</h3>
                        </div>
                        <div>
                            <h4 className={styles['date']}>{date}</h4>
                        </div>
                    </div>
                    <div className={styles['left-description']}>
                        <h5 className={styles['left-text']}>{text}</h5>
                    </div>
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
                        className={styles['Image']}
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