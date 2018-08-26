import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageAvatars2 from './ImageAvatars2';
import TextFields from './TextFields';
import IconLabelButtons from './IconLabelButtons';
import IconLabelButtons2 from './IconLabelButtons2';

const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    'font-size': 25,
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
            <h3><b>Información del consejero</b></h3>
            <ImageAvatars2/>
            <br/>
            <b>Martín Moscosa</b> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Compania:</b> Microsoft<br/>
            <b>Miembro desde:</b> Julio 2015
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <b>Estudiantes asesorados:</b>37

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <br/>Estoy buscando estudiantes de séptimo semestre o 
            superior que estén interesados en sistemas computacionales o 
            carreras afín que quieran aprender acerca de <b>Microsoft</b>.
            <h3>Lugares disponibles: 15 </h3>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h3><b>Deja un mensaje</b></h3>
            <br/>
            <TextFields/>
            <br/>
            <IconLabelButtons/>
            Sube tu Curriculum (Opcional)
            <br/><br/>
            
            <IconLabelButtons2/>
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
