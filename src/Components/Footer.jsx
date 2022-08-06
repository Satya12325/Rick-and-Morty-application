import styles from "./header.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.footerSubtitle}>
          <h5>CHARACTERS: 826</h5>
          <h5>LOCATIONS: 126</h5>
          <h5>EPISODES: 51</h5>
        </div>
        <div className={styles.footerStatus}>
          <h5>SERVER STATUS</h5>{" "}
          <div
            style={{
              height: "10px",
              width: "10px",
              borderRadius: "50%",
              background: "greenyellow"
            }}
          ></div>
        </div>
        <div className={styles.icons}>
          <GitHubIcon className={styles.muiIcon} />
          <TwitterIcon className={styles.muiIcon} />
          <FavoriteIcon className={styles.muiIcon} />
        </div>
      </div>
    </div>
  );
};
export { Footer };
