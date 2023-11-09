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
        text: "Using React.js to implement the UI and Node.js and Express, to store informations of profiles on MongoDB, we've created a system that allows administrators of Man Expeditions to easily filter and sort through applicants to their program and organize them into groups of individuals with similar interests."
    }
      
    const SkyIT = {
        orientation: "left",
        title: "SkyIT",
        image: "https://i.ibb.co/Dkcvj1J/IMG-6221.jpg",
        date: "Mar 2023 - Sep 2023",
        text: "Joined the SkyIT team to assist project management for technology services aimed towards assisting the aviation fleet industry in overcoming modern challenges by maintaining, reviewing, and adjusting code and architecture (React/TypeScript). Implemented a variety of reusable React components to various projects - internal tool development, website revamp, and bespoke fleet management solutions for key partners like WestJet, Schlumberger, ATCO, and Fednav."
    }

    const DOE = {
        orientation: "left",
        title: "United States Department of Energy",
        date: "Aug 2020 - May 2020",
        image: "https://i.ibb.co/Dkcvj1J/IMG-6221.jpg",
        text: "Engineered and designed the first in its class “lighting calculator” for the United States Department of Energy.The application was used to store lighting metrics (spectral power distributions) to derive lighting qualities (TM30, CRI, color temperature, and etcetera) for commercial LEDs."
    } 

    const AUCAS = {
        orientation: "left",
        title: "American University",
        date: "Aug 2022 - May 2023",
        image: "https://i.ibb.co/Dkcvj1J/IMG-6221.jpg",
        text: "Invented the idea and serialized a plan to create an American University exclusive networking application that puts emphasis on tangible projects that users want to feature. Instead of looking at an applicant’s experience when considering them for a role, find out who is behind an outstanding project and take a closer look at their profile."
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
                            <ImageDescription {...AUCAS} priority={true} />
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
