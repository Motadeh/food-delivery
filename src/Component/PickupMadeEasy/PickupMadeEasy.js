import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./PickupMadeEasy.css";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
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
    backgroundColor: theme.palette.background.paper
  }
});

class PickupMadeEasy extends Component {
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
        fvgf
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Item One</TabContainer>}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
        </div>
        {/* <div className="text">
          <div>Pickup, Delivery and Food Ordering Made Easy</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            egestas feugiat felis. Mauris lobortis nisl nec mi convallis
            finibus. Nulla facilisi. Donec urna orci, placerat vestibulum sapien
            eget, laoreet egestas elit.
          </div>
          <div>Pickup, Delivery and Food Ordering Made Easy</div>
        </div> */}
        <div className="img">hbh</div>
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PickupMadeEasy);
