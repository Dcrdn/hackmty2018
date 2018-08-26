import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    'font-size': 20,
    color: theme.palette.text.secondary,
    height: 500,
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h1>Información del consejero</h1>
            FOTO Martín Lopez &nbsp;&nbsp;&nbsp;Compania: Microsoft<br/>
            Miembro desde: Julio 2015
            Estudiantes asesorados:37
            Estoy buscando estudiantes de séptimo semestre o 
            superior que estén interesados en sistemas computacionales o 
            carreras afín que quieran aprender acerca de Microsoft.
            <h1>Lugares disponibles: 15 </h1>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Deja un mensaje
            textbox
            Sube tu Curriculum (Opcional)
            <br/><br/><br/><br/><br/><br/>
            Aplicar
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
