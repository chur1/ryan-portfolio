import React, { useEffect } from "react";
import styles from "../styles/index/index.module.scss";
import Navigation from "../components/shared/navigation/Navigation";

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    console.log(Math.min(percentOfScreenHeightScrolled));
    htmlElement.style.setProperty("--scroll", `${Math.min(percentOfScreenHeightScrolled * 100, 100)}%`);
}


const Proto = () => {

    useEffect(() => {
        // Add scroll and resize event listeners
        window.addEventListener("scroll", setScrollVar);
        window.addEventListener("resize", setScrollVar);
    
        // Initial call to setScrollVar to set the initial value
        setScrollVar();
    
        // Cleanup the event listeners when the component unmounts
        return () => {
        window.removeEventListener("scroll", setScrollVar);
        window.removeEventListener("resize", setScrollVar);
        };
    }, []);

return (
    <>
        <div className={styles['page-container']}>
            <section className={styles['first-page']}>
                <div className={styles['backgroundVideo']}>
                    <video className={styles['jacko']} id="backgroundVideo" src={"/videos/Sequence_01.mp4"} autoPlay muted loop/>
                </div>
                <h1 className={styles['hello_text']}>Hello, My Name is Ryan!</h1>
                <h5 className={styles['scroll-down-text']}>Scroll Down</h5>
            </section>
            <section className={styles['second-page']}>
                <div>
                    <h1 className={styles['hello']}>Please Check Back Later :(</h1>
                </div>
            </section>
        </div>
    </>
);
}

export default Proto;
