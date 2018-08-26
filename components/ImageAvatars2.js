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

function ImageAvatars2(props) {
  const { classes } = props;
  return (
    <div className={classes.row}>
      <Avatar
        alt="Adelle Charles"
        src="https://scontent.fntr4-1.fna.fbcdn.net/v/t1.0-9/31682321_10160300033275364_8148025213641031680_n.jpg?_nc_cat=0&oh=023a96b8372fa1e39fb7abb788dbcb05&oe=5C3477AC"
        className={classNames(classes.avatar, classes.bigAvatar)}
      />
    </div>
  );
}

ImageAvatars2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageAvatars2);
