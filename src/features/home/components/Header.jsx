import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../store/actions/setTheme";
import { setLanguage } from "../../../store/actions/setLanguage";

export default function Header() {
  const { t, i18n } = useTranslation();
  // pages with t
  const pages = [t("Home"), t("Products"), t("New Arrivals"), t("Brands")];
  const settings = ["Profile", "Settings", "Logout"];
  const { isDarkMode } = useSelector((state) => state.setTheme);
  const { language } = useSelector((state) => state.setLanguage);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    dispatch(setTheme(!isDarkMode));
  };

  const handleLanguageChange = () => {
    dispatch(setLanguage(language === "tr" ? "en" : "tr"));
    i18n.changeLanguage(language === "tr" ? "en" : "tr");
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "background.paper",
        backgroundImage: "none",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => navigate("/")}
          >
            <img src="/SHOP.CO.png" alt="logo" />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "text.main",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              alignSelf: "",
              width: "100%",
            }}
          >
            <img src="/SHOP.CO.png" alt="logo" />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              border: "none",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "text.primary", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                borderRadius: "50px",
              },
            }}
          >
            <TextField
              placeholder="Search"
              sx={{
                width: "100%",
                borderRadius: "99px",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "99px",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 0,
              display: "flex",
              gap: "0.5rem",
              color: "text.main",
            }}
          >
            <Tooltip title="Search">
              <IconButton
                color="inherit"
                sx={{ display: { xs: "block", sm: "block", md: "none" } }}
              >
                <SearchIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Change language">
              <IconButton
                color="inherit"
                onClick={handleLanguageChange}
                sx={{ display: { xs: "block", sm: "block" } }}
              >
                <LanguageIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Change theme">
              <IconButton
                color="inherit"
                onClick={handleThemeChange}
                sx={{ display: { xs: "block", sm: "block" } }}
              >
                {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Cart">
              <IconButton
                color="inherit"
                sx={{ display: { xs: "block", sm: "block" } }}
                onClick={() => navigate("/cart")}
              >
                <LocalGroceryStoreIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} color="inherit">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
