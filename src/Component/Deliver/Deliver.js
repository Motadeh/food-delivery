import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Deliver.css";
import PickupMadeEasy from "../PickupMadeEasy/PickupMadeEasy";
import AsTrustedBy from "../AsTrustedBy/AsTrustedBy";

const styles = theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: "#5C0317"
  }
});

class Deliver extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="Deliverheader">
        <div><PickupMadeEasy /></div>
        <div><AsTrustedBy /></div>
      </div>
    );
  }
}

export default withStyles(styles)(Deliver);
