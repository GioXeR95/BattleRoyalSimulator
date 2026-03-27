import React, { useState, useEffect } from "react";
import { PlayerCard } from "../components/HomePage/PlayerCard";
import { useTranslation } from "react-i18next";
import "../styles/pages/homePage.scss";

export default function HomePage() {
  const [gameEngines, setGameEngines] = useState<string[]>([]);
  const [selectedEngine, setSelectedEngine] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [playerCount, setPlayerCount] = useState(10);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchGameEngines = async () => {
      try {
        const response = await fetch("/game_engines/manifest.json");
        if (!response.ok) {
          throw new Error(`Failed to fetch manifest: ${response.status}`);
        }
        const files: string[] = await response.json();
        const jsonFiles = files
          .filter((file: string) => file.endsWith(".json"))
          .filter((file: string) => file !== "manifest.json")
          .map((file: string) => file.replace(".json", ""));
        setGameEngines(jsonFiles);
      } catch (error) {
        console.error("Failed to load game engines:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameEngines();
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.name.endsWith(".json")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          JSON.parse(event.target?.result as string);
          setSelectedEngine(file.name.replace(".json", ""));
        } catch {
          alert(t("pages.home.alerts.invalidJSONFile"));
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="home-page">
      <h3>{t("pages.home.pageTitle")}</h3>
      <h4>{t("pages.home.selectEngineLabel")}</h4>

      {loading ? (
        <p>{t("pages.home.loadingGameEngines")}</p>
      ) : (
        <>
          <select
            value={selectedEngine}
            onChange={(e) => setSelectedEngine(e.target.value)}
            className="home-page__engine-select"
          >
            <option value="">{t("pages.home.chooseEnginePlaceholder")}</option>
            {gameEngines.map((engine) => (
              <option key={engine} value={engine}>
                {engine}
              </option>
            ))}
          </select>

          <div className="home-page__upload">
            <label>
              {t("pages.home.uploadAJsonFile")}
              <input
                type="file"
                accept=".json"
                onChange={handleFileUpload}
                className="home-page__file-input"
              />
            </label>
          </div>

          {selectedEngine && (
            <button
              onClick={() => console.log(`Selected: ${selectedEngine}`)}
              className="home-page__start-button"
            >
              {t("pages.home.buttons.startGame")}
            </button>
          )}
        </>
      )}
      {selectedEngine && (
        <div className="home-page__players-section">
          <label className="home-page__player-count-label">
            {t("pages.home.playerCountLabel")}:
            <input
              type="number"
              min="2"
              max="50"
              defaultValue="10"
              onChange={(e) => setPlayerCount(parseInt(e.target.value))}
              className="home-page__player-count-input"
            />
          </label>
          <div className="home-page__players-grid">
            {Array.from({ length: playerCount }, (_, i) => (
              <PlayerCard
                key={i}
                playerName={t("pages.home.playerLabel", { number: i + 1 })}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}