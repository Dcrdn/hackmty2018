import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'left',
  },
  avatar: {
    margin: 20,
  },
  bigAvatar: {
    width: 110,
    height: 110,
    "align-self": "right",
  },
  salto:{
    padding: 20,
    "margin-right": "100px",

  }
};

function ImageAvatars3(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="Adelle Charles"
        src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.0-9/40093960_2328433253839690_2232803199104843776_n.jpg?_nc_cat=0&oh=0824a53560f48b90b7fa9aa17985199a&oe=5BECE360"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
      <div className={classes.salto}>Diego Isaac Cardenas Aranda <br/>  
      Estudiante: Tecnologico de Monterrey <br/>
      Semestre: 5<br/></div>
    </div>
  );
}

ImageAvatars3.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars3);