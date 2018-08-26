import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  div:{
    width: 500,
  },
  button: {
    margin: theme.spacing.unit,
    align: 'right',
  },
  input: {
    display: 'none',
  },
});

function ContainedButtons2(props) {
  const { classes } = props;
  return (
    <div class="div">

      <Button variant="contained" color="primary" className={classes.button}>
        Buscar
      </Button>
    </div>
  );
}

ContainedButtons2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons2);
