import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 80,
  },
};

function MediaCard2(props) {
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
          Martín Moscosa
        </Typography>
        <Typography component="p">
          Hola! Les mando un video muy interesante sobre inteligencia artificial. Esto es algo
          muy nuevo y la empresa se está interesando en ello.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard2);