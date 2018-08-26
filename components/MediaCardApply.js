import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ImageAvatars2 from './ImageAvatars2';

const styles = {
  card: {
    'align': "left",
    maxWidth: 550,
  },
  media: {
    height: 80,
  },
};

function MediaCardApply(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="./sesamo.JPG"
        title="Contemplative Reptile"
      />
      <CardContent>
      <ImageAvatars2/>
        <Typography gutterBottom variant="headline" component="h2">
          Martín Moscosa
        </Typography>
        <Typography component="p">
          Hola! Me llamo Martín. Trabajo en Wizeline como PM en el area de educación. Siéntanse
          libres de seguirme, publico cosas interesantes.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Seguir
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCardApply.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCardApply);