import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface PlayerCardProps {
  playerName?: string;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ playerName }) => {
  const [profileUrl, setProfileUrl] = useState('');
  const [imageLoadError, setImageLoadError] = useState(false);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const { t } = useTranslation();

  return (
    <div className="player-card" style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px' }}>
      <h2>{playerName}</h2>
      
      <div
        style={{
          marginBottom: '15px',
          width: '140px',
          aspectRatio: '1 / 1',
          border: '1px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#f8f8f8'
        }}
      >
        {profileUrl && !imageLoadError && (
          <img
            src={profileUrl}
            alt="Profile"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />

      <input
        type="text"
        placeholder={t("components.homePage.playerCard.nameLabel")}
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
      />

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        style={{ display: 'block', width: '100%', padding: '8px' }}
      >
        <option value="">{t("components.homePage.playerCard.genderOptions.label")}</option>
        <option value="M">{t("components.homePage.playerCard.genderOptions.male")}</option>
        <option value="F">{t("components.homePage.playerCard.genderOptions.female")}</option>
        <option value="Altro">{t("components.homePage.playerCard.genderOptions.other")}</option>
      </select>

      <p style={{ marginTop: '15px', fontSize: '14px' }}>
        {name && `${name} - ${gender}`}
      </p>
    </div>
  );
};