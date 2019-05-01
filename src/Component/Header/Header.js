import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import CourierService from "../CourierService/CourierService";
import Deliver from "../Deliver/Deliver";
import FoodDelivery from "../FoodDelivery/FoodDelivery";
import "./Header.css";


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

class Header extends Component {
  state = {
    value: 1
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
            style={{ backgroundColor: "#5C0317", alignItems: "left" }}
          >
            <Tabs value={value} onChange={this.handleChange} variant='fullWidth'>
              <Tab label="Deliver" />
              <Tab label="Courier Services" />
              <Tab label="Food Delivery" />
              <Tab label="Sign In" />
            </Tabs>
          </AppBar>
          {value === 0 && (
            <TabContainer>
              <Deliver />
            </TabContainer>
          )}
          {value === 1 && (
            <TabContainer>
              <CourierService />
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              {/* <FoodDelivery /> */}
              cvf
            </TabContainer>
          )}
          {value === 5 && <TabContainer>Sign In</TabContainer>}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
