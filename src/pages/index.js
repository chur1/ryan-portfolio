import React from "react";
import styles from "../styles/index/index.module.scss";
import ImageDescriptionLeft from "../components/title-description/ImageDescriptionLeft";

const ManExpeditions = {
  image: "https://i.ibb.co/Dkcvj1J/IMG-6221.jpg",
  text: "hello!"
}

const Index = () => {
  return(
      <div>
        <div className={styles["background"]}>
          <h1 className={styles["firstLine"]}>Hello, My Name Is Ryan!</h1>
        </div>
        <div>
          <ImageDescriptionLeft {...ManExpeditions} />
        </div>
      </div>
  )
}

export default Index;