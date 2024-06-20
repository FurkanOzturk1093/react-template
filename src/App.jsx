import Test from "./pages/Test";
import { Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { CssBaseline, Box } from "@mui/material";
function App() {
  const routes = [
    {
      path: "/test",
      component: Test,
    },
  ];
  const { isDarkMode } = useSelector((state) => state.setTheme);
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }} bgcolor="background">
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
