import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  wrapper: {
    maxWidth: 800,
  },
  paper: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
  },
});

function AutoGridNoWrap(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item>
              <Avatar>D</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>
              <b>Dafne Medina</b><br/>
                Hola Diego! Me preguntaba si me puedes ayudar a encaminarme un poco por la parte de UX. Ando perdida
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item>
              <Avatar>E</Avatar>
            </Grid>
            <Grid item xs>
              <Typography noWrap>
                <b>Elizabeth Arredón</b><br/>
                  Hey Diego! Vi tu perfil y estoy interesado en que seas mi aprendiz. Si te agrada la idea postúlate en la...
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={16}>
            <Grid item>
              <Avatar>C</Avatar>
            </Grid>
            <Grid item xs>
              <Typography>
                <b>Cynthia Treviño</b><br/>
                Claro que sí Diego! Tengamos una videollamada en Skype y te platicaré sobre la vida en Oracle...
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);