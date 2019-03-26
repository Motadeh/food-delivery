import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./Deliver.css";
import PickupMadeEasy from "../PickupMadeEasy/PickupMadeEasy";
import AsTrustedBy from "../AsTrustedBy/AsTrustedBy";
import Phone from "../Phone/Phone";
import NoMatterTheSize from "../NoMatterTheSize/NoMatterTheSize";
import MakeMoney from "../MakeMoney/MakeMoney";
import WhatUsers from "../WhatUsers/WhatUsers";
import DeliverFooter from "../DeliverFooter/DeliverFooter";

const styles = theme => ({
  root: {
    flexGrow: 1
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
        <div>
          <PickupMadeEasy />
        </div>
        <div>
          <AsTrustedBy />
        </div>
        <div>
          <Phone />
        </div>
        <div>
          <NoMatterTheSize />
        </div>
        <div>
          <MakeMoney />
        </div>
        <div>
          <WhatUsers />
        </div>
        <div>
          <DeliverFooter />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Deliver);
