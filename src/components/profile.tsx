import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level, profileName, url_img, openProfileModal } = useContext(
    ChallengesContext
  );
  return (
    <div className={styles.profileContainer}>
      <img
        src={url_img != "" ? url_img : "icons/defaultprofile.jpg"}
        alt="Avatar"
        onClick={openProfileModal}
      />
      <div>
        <strong onClick={openProfileModal}>{profileName}</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
