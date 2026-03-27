import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../styles/components/HomePage/playerCard.scss";

interface PlayerCardProps {
  playerName?: string;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ playerName }) => {
  const [profileUrl, setProfileUrl] = useState("");
  const [imageLoadError, setImageLoadError] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const { t } = useTranslation();

  return (
    <div className="player-card">
      <h2>{playerName}</h2>

      <div className="player-card__image-box">
        {profileUrl && !imageLoadError && (
          <img
            src={profileUrl}
            alt="Profile"
            className="player-card__image"
            onError={() => setImageLoadError(true)}
          />
        )}
      </div>

      <input
        type="text"
        placeholder={t("components.homePage.playerCard.urlPhotoLabel")}
        value={profileUrl}
        onChange={(e) => {
          setProfileUrl(e.target.value);
          setImageLoadError(false);
        }}
        className="player-card__field"
      />

      <input
        type="text"
        placeholder={t("components.homePage.playerCard.nameLabel")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="player-card__field"
      />

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="player-card__field"
      >
        <option value="">
          {t("components.homePage.playerCard.genderOptions.label")}
        </option>
        <option value="M">
          {t("components.homePage.playerCard.genderOptions.male")}
        </option>
        <option value="F">
          {t("components.homePage.playerCard.genderOptions.female")}
        </option>
        <option value="Altro">
          {t("components.homePage.playerCard.genderOptions.other")}
        </option>
      </select>

      <p className="player-card__summary">{name && `${name} - ${gender}`}</p>
    </div>
  );
};