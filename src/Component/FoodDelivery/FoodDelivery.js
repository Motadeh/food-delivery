import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./FoodDelivery.css";
import Header3 from "../Header3/Header3";

const styles = theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: "#5C0317"
  }
});

class FoodDelivery extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="Foodheader">
        <div>
          <Header3 />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(FoodDelivery);
