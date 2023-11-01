import React, { useEffect } from "react";
import styles from "../styles/proto/Proto.module.scss";
import Navigation from "../components/shared/navigation/Navigation";

const Proto = () => {

return (
    <>
        <section className={styles['first-page']}>
            <div className={styles['backgroundVideo']}>
                <video className={styles['jacko']} id="backgroundVideo" src="api/video" autoPlay muted loop/>
            </div>
            <h1 className={styles['hello_text']}>Hello, My Name is Ryan _</h1>
        </section>
        {/* <section>
            <div>
                <h1>hello</h1>
            </div>
        </section> */}
    </>
);
}

export default Proto;
