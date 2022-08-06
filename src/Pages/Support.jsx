import React from "react";
import styles from "./home.module.css";

const Support = () => {
  return (
    <div>
      <div style={{ width: "70%", margin: "auto" }}>
        <h2>Support The Rick and Morty API</h2>
        <h6>Help to maintain The Rick and Morty API's infrastructure!</h6>
        <p>
          If you are using the API for your app, your online tutorials or your
          coding challenges, please consider supporting us to help keep the
          project alive
        </p>
        <p>
          We are not getting any money from this and we use our free time to
          keep the API running and the data up to date. Every contribution,
          however big or small, is super valuable for our future.
        </p>
        <p>Thanks!</p>

        <div className={styles.imgContainer}>
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png"
            alt=""
          />
          <img src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3" alt="" />
        </div>
      </div>
    </div>
  );
};

export { Support };
