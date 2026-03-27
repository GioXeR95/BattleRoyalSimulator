import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between px-4 py-3 shadow-md">
      <button
        onClick={() => navigate("/")}
        className="text-sm font-medium hover:bg-gray-800 px-3 py-2 rounded transition"
      >
        ← {t("components.header.home")}
      </button>
      <h1 className="text-xl font-bold">{t("appName")}</h1>
      <button
        onClick={onToggleTheme}
        className="text-sm font-medium px-3 py-2 rounded border"
      >
        {theme === "dark"
          ? t("components.header.themeLight")
          : t("components.header.themeDark")}
      </button>
    </header>
  );
};