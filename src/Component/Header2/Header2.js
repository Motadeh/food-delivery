import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Header2.css";
import CourierService from "../CourierService/CourierService";
import CourierServiceHome from "../CourierServiceHome/CourierServiceHome";


function TabContainer(props) {
  return <Typography>{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: '#5C0317'
  }
});

class Header2 extends Component {
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
          <AppBar
            position="static"
            style={{ backgroundColor: "#FFFFFF", color: "#5C0426", alignItems: "left" }}
          >
            <Tabs value={value} onChange={this.handleChange} variant='fullWidth'>
              <Tab label="Home" />
              <Tab label="Payment Methods" />
              <Tab label="History" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <CourierServiceHome />
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <CourierService />
            </TabContainer>
          )}
          {value === 2 && <TabContainer>Food Delivery</TabContainer>}
        </div>
      </div>
    );
  }
}

Header2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header2);
