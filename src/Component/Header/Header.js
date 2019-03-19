import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Header.css";
import PickupMadeEasy from "../PickupMadeEasy/PickupMadeEasy";

function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#5C0317'
  }
});

class Header extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="App">
        <div className={classes.root}>
          <AppBar position="static" style={{backgroundColor: '#5C0317', alignItems:'center'}}>
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Deliver" />
              <Tab label="Courier Services" />
              <Tab label="Food Delivery" />
              <Tab label="How it works" />
              <Tab label="FAQs" />
              <Tab label="Sign In" />
              <Tab label="Become A Dispatcher" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer><PickupMadeEasy /></TabContainer>}
          {value === 1 && <TabContainer>Courier Services</TabContainer>}
          {value === 2 && <TabContainer>Food Delivery</TabContainer>}
          {value === 3 && <TabContainer>How it works</TabContainer>}
          {value === 4 && <TabContainer>FAQs</TabContainer>}
          {value === 5 && <TabContainer>Sign In</TabContainer>}
          {value === 6 && <TabContainer>Become A Dispatcher</TabContainer>}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
