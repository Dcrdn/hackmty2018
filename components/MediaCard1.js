import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContainedButtons from './ContainedButtons';

const styles = {
  card: {
    maxWidth: 1100,
  },
  media: {
    height: 80,
  },
};

function MediaCard1(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="./sesamo.JPG"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Elizabeth Arredon
        </Typography>
        <Typography component="p">
          Hola! Durante los proximos 6 meses estaré asesorando a 5 estudiantes universitarios
          en su trayectoria profesional. Interesados aplicar :) Que tengan bonito día.
        </Typography>
      </CardContent>
      <CardActions>
        <ContainedButtons/>
      </CardActions>
    </Card>
  );
}

MediaCard1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard1);