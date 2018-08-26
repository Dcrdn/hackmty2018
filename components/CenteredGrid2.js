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
          <b>Martín Moscosa</b><br/>
          <p textAlign="left">Hola! Les mando un video muy interesante sobre inteligencia artificial. Esto es algo
          muy nuevo y la empresa se está interesando en ello. </p>
<iframe src="https://youtube.com/embed/5J5bDQHQR1g"
        width="200" height="100" frameborder="0" allowfullscreen>
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
          <b>Elizabeth Arredón</b><br/>
          Acabo de regresar de mi viaje de reclutamiento
          por latinoamérica. Fue una increíble experiencia
          donde aprendí muchísimo. Uno de estos conocimientos es sobre el
          desarrollo de un buen Resume. Para eso escribí un blog! Les dejo 
          el link :)  
  <a href="https://www.linkedin.com/pulse/10-tips-international-university-candidates-making-arredon-mier ">Linkedin post</a>


          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper2}>
            Mensajes<br/>

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
