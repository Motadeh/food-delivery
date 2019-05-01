import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./MiniAsTrustedBy.css";
import * as spectranet from "../../Assets/spectranet-logo.png";
import * as Bukka from "../../Assets/Bukka-Hut-Logo.png";
import * as MegaChicken from "../../Assets/Mega-Chicken-Logo-3D-Low-Res.png";
import * as Fuud from "../../Assets/nhrh9dpsslom5ssyb4xv.png";
import * as ThePlace from "../../Assets/header_the-place-lagos.png";
import * as Delivery from "../../Assets/delivery.png";
import * as Guarantee from "../../Assets/guarantee.png";
import * as Meal from "../../Assets/meal.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#5C0317"
  }
});

class MiniAsTrustedBy extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="asheader">
        <div className="content">
          <div className="astrustedby">As Trusted By</div>
          <div className="img">
            <div className="imgs">
              <img src={spectranet} id='minias' />
            </div>
            <div className="imgs">
              <img src={Bukka} id='minias' />
            </div>
            <div className="imgs">
              <img src={MegaChicken} id='minias' />
            </div>
            <div className="imgs">
              <img src={Fuud} id='minias' />
            </div>
            <div className="imgs">
              <img src={ThePlace} id='minias' />
            </div>
          </div>
          <div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(MiniAsTrustedBy);
