import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./AsTrustedBy.css";
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

class AsTrustedBy extends Component {
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
              <img src={spectranet} id="asimg" />
            </div>
            <div className="imgs">
              <img src={Bukka} id="asimg" />
            </div>
            <div className="imgs">
              <img src={MegaChicken} id="asimg" />
            </div>
            <div className="imgs">
              <img src={Fuud} id="asimg" />
            </div>
            <div className="imgs">
              <img src={ThePlace} id="asimg" />
            </div>
          </div>
          <div className="ondelivery" style={{ maxWidth: "454px" }}>
            On demand Delivery and Restaurant Services
          </div>
          <div
            className="lorem"
            style={{ maxWidth: "993px", textAlign: "center" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            egestas feugiat felis. Mauris lobortis nisl nec mi convallis
            finibus. Nulla facilisi. Donec urna orci, placerat vestibulum sapien
            eget, laoreet egestas elit.
          </div>

          <div className="img2">
            <div className="imgs2" style={{ maxWidth: "350px" }}>
              <div className="imgss">
                <img src={Delivery} style={{ maxWidth: "176px" }} id="asimg2" />
              </div>
              <div className="text1" style={{ maxWidth: "316px" }}>
                Easiest Way to get your Pickup and Delivery Done
              </div>
              <div className="text2" style={{ maxWidth: "350px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                egestas feugiat felis. Mauris lobortis nisl nec mi convallis
                finibus. Nulla facilisi. Donec urna orci, placerat vestibulum
                sapien eget, laoreet egestas elit.
              </div>
            </div>

            <div className="imgs2">
              <div className="imgss">
                <img src={Meal} style={{ maxWidth: "176px" }} id="asimg2" />
              </div>
              <div className="text1" style={{ maxWidth: "279px" }}>
                Get Food Delivered to Your Doorstep Quickly
              </div>
              <div className="text2" style={{ maxWidth: "350px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                egestas feugiat felis. Mauris lobortis nisl nec mi convallis
                finibus. Nulla facilisi. Donec urna orci, placerat vestibulum
                sapien eget, laoreet egestas elit.
              </div>
            </div>

            <div className="imgs2">
              <div className="imgss">
                <img
                  src={Guarantee}
                  style={{ maxWidth: "176px" }}
                  id="asimg2"
                />
              </div>
              <div className="text1" style={{ maxWidth: "227px" }}>
                Low Cost Rate and Excellent Value
              </div>
              <div className="text2" style={{ maxWidth: "350px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                egestas feugiat felis. Mauris lobortis nisl nec mi convallis
                finibus. Nulla facilisi. Donec urna orci, placerat vestibulum
                sapien eget, laoreet egestas elit.
              </div>
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

export default withStyles(styles)(AsTrustedBy);
