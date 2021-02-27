import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ProfileModal.module.css";

export function ProfileModal() {
  const { saveProfile, closeProfileModal, url_img, profileName } = useContext(
    ChallengesContext
  );
  const [name, setName] = useState(profileName);
  const [input_url_img, setInput_url_img] = useState(url_img);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = input_url_img;
    image.onload = () => {
      setIsLoaded(true);
    };
    image.onerror = () => {
      setIsLoaded(false);
    };
  }, [input_url_img]);

  function saveUserProfile() {
    if (name === "") return;
    let url = url_img;
    if (isLoaded) {
      url = input_url_img;
    }
    saveProfile(name, url);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <strong>Perfil</strong>
        <div className={styles.avatar}>
          <img
            src={isLoaded ? input_url_img : "icons/defaultprofile.jpg"}
            alt=""
          />
        </div>

        <div className={styles.profile}>
          <div className={styles.inputBlock}>
            <label htmlFor="url">Url da sua imagem</label>
            <input
              type="text"
              id="url"
              placeholder="url"
              value={input_url_img}
              onChange={(e) => {
                setInput_url_img(e.target.value);
              }}
            />
          </div>

          <div className={styles.inputBlock}>
          <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          <button type="button" onClick={saveUserProfile}>
            {profileName != '' ? 'Salvar' : 'Começar'}
          </button>
          </div>

        </div>
        {profileName != "" ? (
          <button type="button" onClick={closeProfileModal}>
            <img src="/icons/close.svg" alt="fechar" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
