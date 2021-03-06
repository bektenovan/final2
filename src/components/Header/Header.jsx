import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LooksIcon from "@mui/icons-material/Looks";
import { createTheme } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Badge } from "@mui/material";
import { authProductContext } from "../../contexts/authProductContext";
import { basketContext } from "../../contexts/basketContext";
import { useContext } from "react";
import { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Favorite from "@mui/icons-material/Favorite";

const pages = [, "", ""];
const settings = [];

const Header = () => {
  const { currentUser, logOut } = useContext(authProductContext)
  const { count, getBasket } = useContext(basketContext)
  console.log(getBasket);
  useEffect(() => {
    getBasket()
  }, [])

  // const { currentUser, logOut } =React.useContext(authProductContext);
  // console.log(currentUser);
  // const navigate = useNavigate();


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box className="head">
      <AppBar position="static">
        <Box color={"white"} bgcolor="black">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <LooksIcon
                style={{ color: "white" }}
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Link to="/">    <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "GT America Burrow",
                  height: "3.rem",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#ff77a9",
                  textDecoration: "none",
                }}>
                Rainbow
              </Typography></Link>
              <Link to="/products"> <Typography
                variant="h6"
                noWrap
                component="a"

                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Sylvester",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white ",
                  textDecoration: "none",
                }}>
                Products
              </Typography></Link>
              <Link to="/collections"> <Typography
                variant="h6"
                noWrap
                component="a"

                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Sylvester",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white ",
                  textDecoration: "none",
                }}>
                Collections
              </Typography></Link>
              <Link to="/about-us"> <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Sylvester",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white ",
                  textDecoration: "none",
                }}>
                AboutUs
              </Typography></Link>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit">
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
                  }}>
                  {pages.map(page => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}>
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map(page => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}>
                    {page}
                  </Button>
                ))}
              </Box>


              <Link to="/basket">
                <IconButton
                  style={{ marginRight: "30px" }}
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={count} color="error" >
                    <AddShoppingCartIcon style={{ color: "#ff77a9" }} />
                  </Badge>
                </IconButton>
              </Link>




              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
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
                  onClose={handleCloseUserMenu}>
                  {settings.map(setting => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu} >
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                  {/* <Link to='/login'><MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                  }}>LogIn</MenuItem> */}

                  {currentUser ?
                    (<MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                        logOut()
                      }}>LogOut</MenuItem>) :
                    (<Link to='/login'><MenuItem
                      onClick={() => {
                        handleCloseUserMenu();
                      }}>LogIn</MenuItem>
                    </Link>)}


                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </Box>
      </AppBar >
    </Box>
  );
};
export default Header;
