import { configureStore } from "@reduxjs/toolkit";
import setTheme from "./actions/setTheme";
import setLanguage from "./actions/setLanguage";
const store = configureStore({
  reducer: {
    // Add your reducers here
    setTheme,
    setLanguage,
  },
});

export default store;
