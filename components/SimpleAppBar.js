import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  },
  input: {
    display: 'none',
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 100,
    height: 100,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  container: {
   display: 'grid',
   gridTemplateColumns: 'repeat(12, 1fr)',
   gridGap: `${theme.spacing.unit * 3}px`,
 },
 root:{
   flexGrow: 1,
 },
 textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
diego:{
  background : '#F7971E',
  height: 895,
  margin: '-8px',
},

});

const TextFieldMargins = props => {
  const { classes } = props;

}


function SimpleAppBar(props) {
  const { classes } = props;
  return (

      <div className={classes.root, classes.diego}>
      <Grid container  spacing={100} >
        <AppBar position="static" color="default" >
          <Toolbar>
            <Typography variant="title" color="inherit">
              BeMyGuide
            </Typography>
          </Toolbar>
        </AppBar>
        </Grid>
        <Grid container justify="center"  spacing={100}>

        </Grid><br/><br/><br/><br/><br/><br/><br/><br/>
        <Grid container justify="center" spacing={100}>
        <Avatar
          alt="Adelle Charles"
          src='https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'
          className={classNames(classes.avatar, classes.bigAvatar)}
        />
            </Grid>

          <Grid container justify="center" spacing={100}>
          <TextField
            label="Usuario"
            id="margin-none"
            className={classes.textField}
          />
          </Grid>
          <Grid container justify="center" spacing={100}>
          <TextField
        label="Contraseña"
        id="margin-normal"
        className={classes.textField}
        margin="normal"
      />
      </Grid>
      <Grid container justify="center" spacing={100}>
      <a href="http://localhost:3003/home">Iniciar Sesión</a>&nbsp;&nbsp;&nbsp;
      <a href="localhost:3003/login">Olvidé mi contraseña</a>
</Grid>

</div>

  );
}

/*

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};*/
TextFieldMargins.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SimpleAppBar);
