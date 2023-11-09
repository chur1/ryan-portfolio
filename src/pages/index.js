import React, { useEffect } from "react";
import styles from "../styles/index/index.module.scss";
import ImageDescription from "@/components/title-description/ImageDescription";

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    console.log(Math.min(percentOfScreenHeightScrolled));
    htmlElement.style.setProperty("--scroll", `${Math.min(percentOfScreenHeightScrolled * 100, 100)}%`);
}


const Proto = () => {

    // scroll effect 0-1
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

    // image cards defined
    const ManExpeditions = {
        orientation: "left",
        title: "Man Expeditions",
        image: "https://i.ibb.co/Dkcvj1J/IMG-6221.jpg",
        date: "Aug 2020 - Sep 2020",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
      
    const SkyIT = {
        orientation: "left",
        title: "SkyIT",
        image: "https://i.ibb.co/Dkcvj1J/IMG-6221.jpg",
        date: "Mar 2023 - Sep 2023",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
    const DOE = {
        orientation: "left",
        image: "https://i.ibb.co/Dkcvj1J/IMG-6221.jpg",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }

return (
    <>
        <div className={styles['page-container']}>

            {/* background video */}
            <div className={styles['backgroundVideo']}>
                <video className={styles['jacko']} id="backgroundVideo" src={"/videos/Sequence_01.mp4"} autoPlay muted loop playsInline />
            </div>

            {/* first welcome page */}
            <section className={styles['first-page']}>
                <h1 className={styles['hello_text']}>Hello, My Name is Ryan!</h1>
                <h5 className={styles['scroll-down-text']}>\/</h5>
            </section>

            {/* second experience page */}
            <section className={styles['second-page']}>
                <div>
                    <div className={styles['imageCards']}>
                        <div>
                            <ImageDescription {...ManExpeditions} priority={true} />
                        </div>
                        <div>
                            <ImageDescription {...SkyIT} priority={true} />
                        </div>
                        <div>
                            <ImageDescription {...DOE} priority={true} />
                        </div>
                        <div>
                            <ImageDescription {...DOE} priority={true} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
}

export default Proto;
