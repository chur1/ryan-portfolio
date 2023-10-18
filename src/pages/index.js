import React from "react";
import styles from "./Index.module.scss";
import ImageDescriptionLeft from "../components/title-description/ImageDescriptionLeft";

const Index = () => {

  const ManExpeditions = {
    image: "https://i.ibb.co/Dkcvj1J/IMG-6221.jpg",
    text: "hi! \n i'm ryan, this is my portfolio :)"
  }

  return(
      <div>
        <div className={styles["background"]}>
          <h1 className={styles["firstLine"]}>Hello, My Name Is Ryan!</h1>
        </div>
        <div>
          <ImageDescriptionLeft {...ManExpeditions} priority={true} />
        </div>
      </div>
  )
}

export default Index;