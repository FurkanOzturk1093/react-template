import { createTheme } from "@mui/material/styles";

// Light theme
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2c3e50", // Deep, muted blue
    },
    secondary: {
      main: "#d4af37", // Soft gold
    },
    background: {
      default: "#fafafa", // Light, warm gray
      paper: "#ffffff", // Off-white
    },
    text: {
      primary: "#333333", // Dark charcoal
      secondary: "#666666", // Medium gray
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    color: "#333333",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2c3e50", // Deep, muted blue
    },
    secondary: {
      main: "#d4af37", // Soft gold
    },
    background: {
      default: "#121212", // Very dark gray, almost black
      paper: "#1e1e1e", // Medium-dark gray
    },
    text: {
      primary: "#eeeeee", // Light gray
      secondary: "#aaaaaa", // Soft gray
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    color: "#eeeeee",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 600,
    },
  },
});

export { lightTheme, darkTheme };
