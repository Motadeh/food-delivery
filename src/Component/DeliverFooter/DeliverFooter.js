import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./DeliverFooter.css";
import PickupMadeEasy from "../PickupMadeEasy/PickupMadeEasy";
import AsTrustedBy from "../AsTrustedBy/AsTrustedBy";
import Phone from "../Phone/Phone";
import NoMatterTheSize from "../NoMatterTheSize/NoMatterTheSize";
import MakeMoney from "../MakeMoney/MakeMoney";
import WhatUsers from "../WhatUsers/WhatUsers";

const styles = theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: "#5C0317"
  }
});

class DeliverFooter extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="Deliverfooter">
        <div>Deliver</div>
        <div>bhbjbj</div>
      </div>
    );
  }
}

export default withStyles(styles)(DeliverFooter);
