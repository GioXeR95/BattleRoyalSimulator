import React, { useState, useEffect } from 'react';
import { PlayerCard } from '../components/HomePage/PlayerCard';
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const [gameEngines, setGameEngines] = useState<string[]>([]);
  const [selectedEngine, setSelectedEngine] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [playerCount, setPlayerCount] = useState(10);
  const {t} = useTranslation();

  useEffect(() => {
    const fetchGameEngines = async () => {
      try {
        const response = await fetch('/game_engines/manifest.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch manifest: ${response.status}`);
        }
        const files: string[] = await response.json();
        const jsonFiles = files
          .filter((file: string) => file.endsWith('.json'))
          .filter((file: string) => file !== 'manifest.json')
          .map((file: string) => file.replace('.json', ''));
        setGameEngines(jsonFiles);
      } catch (error) {
        console.error('Failed to load game engines:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameEngines();
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith('.json')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          JSON.parse(event.target?.result as string);
          setSelectedEngine(file.name.replace('.json', ''));
        } catch {
          alert(t("pages.home.alerts.invalidJSONFile"));
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h3>{t("pages.home.pageTitle")}</h3>
      <h4>{t("pages.home.selectEngineLabel")}</h4>

      {loading ? (
        <p>{t("pages.home.loadingGameEngines")}</p>
      ) : (
        <>
          <select
            value={selectedEngine}
            onChange={(e) => setSelectedEngine(e.target.value)}
            style={{ padding: '0.5rem', marginRight: '1rem' }}
          >
            <option value="">{t("pages.home.chooseEnginePlaceholder")}</option>
            {gameEngines.map((engine) => (
              <option key={engine} value={engine}>
                {engine}
              </option>
            ))}
          </select>

          <div style={{ marginTop: '1rem' }}>
            <label>
              {t("pages.home.uploadAJsonFile")}
              <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                style={{ marginLeft: '0.5rem' }}
              />
            </label>
          </div>

          {selectedEngine && (
            <button
              onClick={() => console.log(`Selected: ${selectedEngine}`)}
              style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
            >
              {t("pages.home.buttons.startGame")}
            </button>
          )}
        </>
      )}
    {selectedEngine && (
      <div style={{ marginTop: '2rem' }}>
        <label>
      {t("pages.home.playerCountLabel")}:
      <input
        type="number"
        min="2"
        max="50"
        defaultValue="10"
        onChange={(e) => setPlayerCount(parseInt(e.target.value))}
        style={{ marginLeft: '0.5rem', padding: '0.5rem' }}
      />
        </label>
        <div style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
      {Array.from({ length: playerCount }, (_, i) => (
        <PlayerCard playerName={t("pages.home.playerLabel", { number: i + 1 })} />
      ))}
        </div>
      </div>
    )}
    </div>
  );
}