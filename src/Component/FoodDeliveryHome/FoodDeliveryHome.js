import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./FoodDeliveryHome.css";
import MakeMoney from "../MakeMoney/MakeMoney";
import DeliverFooter from "../DeliverFooter/DeliverFooter";
import NearbyDrivers from "../NearbyDrivers/NearbyDrivers";
import DownloadOurApp from "../DownloadOurApp/DownloadOurApp";
import MiniAsTrustedBy from "../MiniAsTrustedBy/MiniAsTrustedBy";
import MiniWhatUsers from "../MiniWhatUsers/MiniWhatUsers";
import RequestBoxit from "../RequestBoxit/RequestBoxit";
import DoorStep from "../DoorStep/DoorStep";
import Phone from "../Phone/Phone";
import Restaurant from "../Restaurant/Restaurant";
import MiniRestaurant from "../MiniRestaurant/MiniRestaurant";
import HowItWorks from "../HowItWorks/HowItWorks";

const styles = theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: "#5C0317"
  }
});

class FoodDeliveryHome extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="FoodDeliveryheader">
        <div>
          <DoorStep />
        </div>
        <div>
          <Restaurant />
        </div>
        <div>
          <HowItWorks />
        </div>
        <div>
          <MiniRestaurant />
        </div>

        <div>&nbsp;</div>
        <div>&nbsp;</div>

        <div>
          <Phone />
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

export default withStyles(styles)(FoodDeliveryHome);
