import { createSlice } from "@reduxjs/toolkit";
import i18next from "../i18n/i18n";
const { changeLanguage } = i18next;

export const enum ThemeList {
  bootstrap4LightBlue = "bootstrap4-light-blue",
  bootstrap4LightPurple = "bootstrap4-light-purple",
  bootstrap4DarkBlue = "bootstrap4-dark-blue",
  bootstrap4DarkPurple = "bootstrap4-dark-purple",
  mdcLightIndigo = "mdc-light-indigo",
  mdcLightDeeppurple = "mdc-light-deeppurple",
  mdcDarkIndigo = "mdc-dark-indigo",
  mdcDarkDeeppurple = "mdc-dark-deeppurple",
  tailwindLight = "tailwind-light",
  fluentLight = "fluent-light",
  laraLightBlue = "lara-light-blue",
  laraLightIndigo = "lara-light-indigo",
  laraLightPurple = "lara-light-purple",
  laraLightTeal = "lara-light-teal",
  laraDarkBlue = "lara-dark-blue",
  laraDarkIndigo = "lara-dark-indigo",
  laraDarkPurple = "lara-dark-purple",
  laraDarkTeal = "lara-dark-teal",
  sohoLight = "soho-light",
  sohoDark = "soho-dark",
  vivaLight = "viva-light",
  vivaDark = "viva-dark",
  mira = "mira",
  nano = "nano",
  sagaBlue = "saga-blue",
  sagaGreen = "saga-green",
  sagaOrange = "saga-orange",
  sagaPurple = "saga-purple",
  velaBlue = "vela-blue",
  velaGreen = "vela-green",
  velaOrange = "vela-orange",
  velaPurple = "vela-purple",
  aryaBlue = "arya-blue",
  aryaGreen = "arya-green",
  aryaOrange = "arya-orange",
  aryaPurple = "arya-purple",
}

const initialState = {
  idiom: "us",
  theme: ThemeList.mdcDarkDeeppurple,
};

export const slice = createSlice({
  name: "config",
  initialState: initialState,
  reducers: {
    changeIdiom(state, { payload }) {
      changeLanguage(payload);
      return { ...state, idiom: payload };
    },
    changeTheme(state, { payload }) {
      return { ...state, theme: payload };
    },
  },
});

export const { changeIdiom, changeTheme } = slice.actions;
export const selectConfig = (state: {
  config: { idiom: string; theme: string };
}) => state.config;
export default slice.reducer;
