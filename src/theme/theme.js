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
      main: "#f5f5f5", // Light gray
      default: "#fafafa", // Light, warm gray
      paper: "#ffffff", // Off-white
    },
    text: {
      main: "#000000", // Black
      primary: "#333333", // Dark charcoal
      secondary: "#666666", // Medium gray
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    color: "#000000",
    h1: {
      fontSize: "5rem",
      fontWeight: 800,
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
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 300,
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
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff", // Use primary main color
          },
          "&.Mui-hovered .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff", // Use primary main color
          },
        },
        notchedOutline: {
          borderColor: "#fff", // Default border color
          borderWidth: "1px",
        },
      },
    },
  },
  // remove appBar boxShadow
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
      main: "#333333", // Dark charcoal
      default: "#121212", // Very dark gray, almost black
      paper: "#1e1e1e", // Medium-dark gray
    },
    text: {
      main: "#ffffff", // White
      primary: "#eeeeee", // Light gray
      secondary: "#aaaaaa", // Soft gray
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    color: "#ffffff",
    h1: {
      fontSize: "5rem",
      fontWeight: 800,
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
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 300,
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
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ffffff", // Use primary main color
            borderWidth: "1px",
          },
        },
        notchedOutline: {
          borderColor: "#eeeeee", // Default border color
          borderWidth: "1px",
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
