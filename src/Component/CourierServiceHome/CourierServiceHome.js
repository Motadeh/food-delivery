import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./CourierServiceHome.css";
import NoMatterTheSize from "../NoMatterTheSize/NoMatterTheSize";
import MakeMoney from "../MakeMoney/MakeMoney";
import WhatUsers from "../WhatUsers/WhatUsers";
import DeliverFooter from "../DeliverFooter/DeliverFooter";
import NearbyDrivers from "../NearbyDrivers/NearbyDrivers";
import OnDemand from "../OnDemand/OnDemand";
import DownloadOurApp from "../DownloadOurApp/DownloadOurApp";
import MiniAsTrustedBy from "../MiniAsTrustedBy/MiniAsTrustedBy";
import MiniWhatUsers from "../MiniWhatUsers/MiniWhatUsers";
import RequestBoxit from "../RequestBoxit/RequestBoxit";

const styles = theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: "#5C0317"
  }
});

class CourierServiceHome extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="CourierServiceheader">
        <div>
          <NearbyDrivers />
        </div>
        <div>
          <OnDemand />
        </div>
        <div>
          <DownloadOurApp />
        </div>
        <div>
          <RequestBoxit />
        </div>
        <div>
          <MakeMoney />
        </div>
        <div>
          <MiniAsTrustedBy />
        </div>
        <div>
          <MiniWhatUsers />
        </div>
        <div>
          <DeliverFooter />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CourierServiceHome);
