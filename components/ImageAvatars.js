import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 20,
  },
  bigAvatar: {
    width: 90,
    height: 90,
  },
};

function ImageAvatars(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="Adelle Charles"
        src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.0-9/40093960_2328433253839690_2232803199104843776_n.jpg?_nc_cat=0&oh=0824a53560f48b90b7fa9aa17985199a&oe=5BECE360"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars);
