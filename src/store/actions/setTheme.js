import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDarkMode: false,
};

const isDarkMode = localStorage.getItem("isDarkMode");
if (isDarkMode === "true") {
  initialState.isDarkMode = true;
} else {
  localStorage.setItem("isDarkMode", false);
  initialState.isDarkMode = false;
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.isDarkMode = action.payload;
      localStorage.setItem("isDarkMode", action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
