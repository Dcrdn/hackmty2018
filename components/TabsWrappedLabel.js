import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  colorback: {
    backgroundColor: "#Ffbd4a",
  }
});

class TabsWrappedLabel extends React.Component {
  state = {
    value: 'one',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.colorback}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="one" label="Mi Perfil" />
            <Tab value="two" label="Que quiero aprender"/>
            <Tab value="three" label="Experiencia" />
          </Tabs>
        </AppBar>
        {value === 'one' && <TabContainer>5to Semestre, <br/>Estudiante, <br/>Tecnologico de Monterrey campus GDL</TabContainer>}
        {value === 'two' && <TabContainer>Me encantaria poder tener un asesor, para mejorar mis habilidades tecnologicas. <br/>
        Por el momento se que me gusta mucho el desarrollo de paginas web y las siguientes tecnologias:<br/> 
        <ul>
        <li>Vue.js</li>
        <li>React.js</li>
        <li>MongoDB (Bases de Datos)</li>
        <li>TypseScript</li>
        </ul></TabContainer>}
        {value === 'three' && <TabContainer>
        Microsoft, 2018 - Explorer Intern
        <br/>
        <br/>
        Nextline, 2017 -  PHP Developer</TabContainer>}
      </div>
    );
  }
}

TabsWrappedLabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsWrappedLabel);