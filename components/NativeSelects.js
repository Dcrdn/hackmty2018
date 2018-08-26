import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class NativeSelects extends React.Component {
  state = {
    age: '',
    name: 'hai',
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
 
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Empresa
          </InputLabel>
          <NativeSelect
            value={this.state.age}
            onChange={this.handleChange('age')}
            input={<Input name="age" id="age-native-label-placeholder" />}
          >
            <option value="">None</option>
            <option value={10}>Facebook</option>
            <option value={20}>Wizeline</option>
            <option value={30}>Microsoft</option>
            <option value={40}>Google</option>
            <option value={50}>Ooyala</option>
            <option value={60}>Bosch</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Carrera
          </InputLabel>
          <NativeSelect
            value={this.state.carrera}
            onChange={this.handleChange('carrera')}
            input={<Input name="carrera" id="age-native-label-placeholder" />}
          >
            <option value="">None</option>
            <option value={10}>Sistemas Computacionales</option>
            <option value={20}>Electrónica</option>
            <option value={30}>Mecatrónica</option>
            <option value={40}>Biotecnología</option>
            <option value={50}>Biomedicina</option>
            <option value={60}>Medicina</option>

          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-native-label-placeholder">
            Género
          </InputLabel>
          <NativeSelect
            value={this.state.genero}
            onChange={this.handleChange('genero')}
            input={<Input name="genero" id="age-native-label-placeholder" />}
          >
            <option value="">None</option>
            <option value={10}>Hombre</option>
            <option value={20}>Mujer</option>
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

NativeSelects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);
