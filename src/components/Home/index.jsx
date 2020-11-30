import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import VideoCall from "@material-ui/icons/VideoCall";
import MoreVert from "@material-ui/icons/MoreVert";
import Apps from "@material-ui/icons/Apps";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
  },
  icons: {
    paddingRight: theme.spacing(2)
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6),
  },
  grow: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <AppBar color="inherit" className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuIcon}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <div className={classes.grow} />
        <IconButton className={classes.icons} color="inherit">
          <VideoCall />
        </IconButton>

        <IconButton className={classes.icons} color="inherit">
          <Apps />
        </IconButton>

        <IconButton className={classes.icons} color="inherit">
          <MoreVert />
        </IconButton>

        <Button
          variant="outlined"
          color="secondary"
          startIcon={<AccountCircleIcon />}
        >
          Fazer login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Home;
