import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MediaCard from "./MediaCard";
import MediaCard1 from "./MediaCard1";
import MediaCard2 from "./MediaCard2";
import ContainedButtons from './ContainedButtons';
import CenteredGrid2 from './CenteredGrid2';
import CustomizedInputs from "./CustomizedInputs";
import ImageAvatars from "./ImageAvatars";
import TabsWrappedLabel from "./TabsWrappedLabel.js";
import ImageAvatars3 from "./ImageAvatars3";

const drawerWidth = 240;

const styles = theme => ({
  diego: {
    'backgroundColor': 'black !important',
  },
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 1000,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '101%',
    margin: '-8px',
  },
  appBar: {
    position: 'absolute',
    backgroundColor: '#Ffbd4a !important',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'appBarShift-left': {
    marginLeft: drawerWidth,
  },
  'appBarShift-right': {
    marginRight: drawerWidth,
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  hello:{
    "text-align": "right",
    "font-family": "Courier New",
    "padding-right": "10px",

  },
  centeredName:{
    "text-align": "center",
    "padding-bottom": "20px",
    "font-family": "Courier New",
    "font-weight": "bold",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  'contentShift-left': {
    marginLeft: 0,
  },
  'contentShift-right': {
    marginRight: 0,
  },
});

class PersistentDrawerMe extends React.Component {
  state = {
    open: false,
    anchor: 'left',
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { anchor, open } = this.state;

    const drawer = (
      <Drawer
        variant="persistent"
        anchor={anchor}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <ImageAvatars/>
       <div className={classes.centeredName}>Diego Cardenas</div>
        <Divider />
        <List className={classes.hello}>
        <a href="http://localhost:3003/home">Inicio</a>
        </List>
        <Divider />
        <Divider />
        <List className={classes.hello}>
        <a href="http://localhost:3003/me">Mi perfil</a>
        </List>
        <Divider />
        <Divider />
        <List className={classes.hello}>
        <a href="http://localhost:3003/red">Mi red</a>
        </List>
        <Divider />
                <Divider />
        <Divider />
        <List className={classes.hello}>
        <a href="http://localhost:3003/asesorar">Asesorar</a>
        </List>
        <Divider />
        <Divider />
        <List className={classes.hello}>
        <a href="http://localhost:3003/aplicaciones">Mis aplicaciones</a>
        </List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
              [classes[`appBarShift-${anchor}`]]: open,
            },)} styles={{background: 'black'}}
          >
            <Toolbar disableGutters={!open}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                
              </Typography>

            </Toolbar>
          </AppBar>
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            &nbsp;&nbsp;
          <br/>
          <ImageAvatars3/>
          <br/>
          <TabsWrappedLabel/>
          </main>
          {after}
        </div>
      </div>
    );
  }
}

PersistentDrawerMe.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerMe);