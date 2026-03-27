import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between px-4 py-3 shadow-md">
      <button
        onClick={() => navigate('/')}
        className="text-sm font-medium hover:bg-gray-800 px-3 py-2 rounded transition"
      >
        ← {t("components.header.home")}
      </button>
      <h1 className="text-xl font-bold">{t("appName")}</h1>
      <div className="w-16" />
    </header>
  );
};