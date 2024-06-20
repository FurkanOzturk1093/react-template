import React from "react";
import { setTheme } from "../../store/actions/setTheme";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { setLanguage } from "../../store/actions/setLanguage";
import { useTranslation } from "react-i18next";
export default function TestView() {
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state) => state.setTheme);
  const { language } = useSelector((state) => state.setLanguage);
  const handleThemeChange = () => {
    dispatch(setTheme(!isDarkMode));
  };
  const { t, i18n } = useTranslation();

  const handleLanguageChange = () => {
    dispatch(setLanguage(language === "tr" ? "en" : "tr"));
    i18n.changeLanguage(language === "tr" ? "en" : "tr");
  };

  return (
    <div>
      <Typography variant="h1">{t("welcome")}</Typography>
      <Button color="success" onClick={handleThemeChange}>
        Change Theme
      </Button>
      <Button color="secondary" onClick={handleLanguageChange}>
        Change Language
      </Button>
    </div>
  );
}
