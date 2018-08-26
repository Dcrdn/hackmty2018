import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImageAvatars from './ImageAvatars';
import TextFields from './TextFields';
import IconLabelButtons from './IconLabelButtons';
import IconLabelButtons2 from './IconLabelButtons2';
import AutoGridNoWrap from './AutoGridNoWrap';
import BotonApply from './BotonApply';

const styles = theme => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    'font-size': 25,
    color: theme.palette.text.secondary,
    height: 300,
  },
  paper2: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    'font-size': 25,
    color: theme.palette.text.secondary,
    height: 200,
  },
});

function CenteredGrid2(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
          <b>Elizabeth Arredón</b><br/>
          <p textAlign="left">Hola! Les mando un video muy interesante sobre inteligencia artificial. Esto es algo
          muy nuevo y la empresa se está interesando en ello. </p>
<iframe src="https://youtube.com/embed/5J5bDQHQR1g"
        width="300" height="170" frameborder="0" allowfullscreen>
</iframe>

          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            Mensajes<br/>
            <AutoGridNoWrap/>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={24}>
        <Grid item xs={7}>
          <Paper className={classes.paper2}>
          <b>Martín Moscosa</b><br/>
          ¡Hola! En este momento tengo puestos abiertos para tener aprendices :) 
          Si están interesados y quieren saber más información denle click al botón.
          <br/>
          <br/>
          <a href="http://localhost:3003/apply">Aplicar</a>

          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper2}>
            Video recomendado para ti<br/>
              <iframe src="https://youtube.com/embed/watch?v=U3CGMyjzlvM"
        width="300" height="170" frameborder="0" allowfullscreen>
</iframe>
          </Paper>
        </Grid>
      </Grid>
    </div>

  );
}

CenteredGrid2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid2);
