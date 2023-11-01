import React, { useEffect } from "react";
import styles from "../styles/proto/Proto.module.scss";
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
        <section className={styles['first-page']}>
            <div className={styles['backgroundVideo']}>
                <video className={styles['jacko']} id="backgroundVideo" src={"/videos/Sequence_01.mp4"} autoPlay muted loop/>
            </div>
            <h1 className={styles['hello_text']}>Hello, My Name is Ryan _</h1>
        </section>
        <section>
            <div>
                <h1 className={styles['hello']}>hello</h1>
            </div>
        </section>
    </>
);
}

export default Proto;
