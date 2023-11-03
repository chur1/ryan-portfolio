import React from "react";
import styles from "./beta.module.scss";
import ImageDescription from "../components/title-description/ImageDescription";

const Index = () => {

  const ManExpeditions = {
    orientation: "left",
    image: "https://i.ibb.co/Dkcvj1J/IMG-6221.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }
  
  const SkyIT = {
    orientation: "right",
    image: "https://i.ibb.co/Dkcvj1J/IMG-6221.jpg",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
  }

  return(
      <div>
        <div className={styles["intro-position"]}>
          <h1 className={styles["header"]}>Hello, My Name Is Ryan!</h1>
        </div>
        <div className={styles["imageLargeDiv"]}>
          <img src="https://i.ibb.co/8mVmKPD/DSC1126.jpg" alt="" className={styles['imageLarge']} />
        </div>
        <div className={styles["some-work-position"]}>
          <h1 className={styles['header']}>Here's some of my work...</h1>
        </div>
        <div className={styles['imageCards']}>
          <div className={styles['imageCard']}>
            <div className={styles['cardContent']}>
              <ImageDescription {...ManExpeditions} priority={true} />
            </div>
          </div>
          <div className={styles['imageCard']}>
            <div className={styles['cardContent']}>
              <ImageDescription {...SkyIT} priority={true} />
            </div>
          </div>
        </div>
      </div>
  )
}

export default Index;