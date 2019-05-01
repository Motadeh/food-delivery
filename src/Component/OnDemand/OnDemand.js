import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./OnDemand.css";
import * as driver from "../../Assets/driver.png";
import * as place from "../../Assets/place.png";
import * as smartphone from "../../Assets/smartphone.png";
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

class OnDemand extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="odheader">
        <div className="odcontent">
          <div className="odimg">
            <div className="odimgs">
              <img src={driver} id="driver" />
              <div
                style={{
                  maxWidth: "96px",
                  maxHeight: "66px",
                  marginLeft: "22px"
                }}
              >
                Over 300 Registered Dispatchers
              </div>
            </div>
            <div className="odimgs">
              <img src={place} id='place' />
              <div
                style={{
                  maxWidth: "131px",
                  maxHeight: "44px",
                  marginLeft: "34px"
                }}
              >
                Over 3000 Deliveries Made{" "}
              </div>
            </div>
            <div className="odimgs">
              <img src={smartphone} id='smartphone' />
              <div
                style={{
                  maxWidth: "112px",
                  maxHeight: "44px",
                  marginLeft: "32.08px"
                }}
              >
                Over 100 Daily Request
              </div>
            </div>
          </div>
          <div className="ondemandpickup">
            On demand Pickup and Delivery Servieces With Realtime Update
            {/* <p>On demand Delivery and</p>
            <p style={{ textAlign: "center" }}>Restaurant Services</p> */}
          </div>
          <div
            className="odlorem"
            style={{ maxWidth: "993px", textAlign: "center" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            egestas feugiat felis. Mauris lobortis nisl nec mi convallis
            finibus. Nulla facilisi. Donec urna orci, placerat vestibulum sapien
            eget, laoreet egestas elit.
          </div>

          <div className="odimg2">
            <div className="odimgs2" style={{ maxWidth: "350px" }}>
              <div className="odtext1a">Enter Pickup and Delivery Address</div>
              <div className="odtext2" style={{ maxWidth: "350px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                egestas feugiat felis. Mauris lobortis nisl nec mi convallis
                finibus. Nulla facilisi. Donec urna orci, placerat vestibulum
                sapien eget, laoreet egestas elit.
              </div>
            </div>

            <div className="odimgs2" style={{ maxWidth: "350px" }}>
              <div className="odtext1b">
                Select Nearest And Preferred Dispatcher
              </div>
              <div className="odtext2" style={{ maxWidth: "350px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                egestas feugiat felis. Mauris lobortis nisl nec mi convallis
                finibus. Nulla facilisi. Donec urna orci, placerat vestibulum
                sapien eget, laoreet egestas elit.
              </div>
            </div>

            <div className="odimgs2" style={{ maxWidth: "350px" }}>
              <div className="odtext1c">
                Get It Picked Up and Delivered Quick
              </div>
              <div className="odtext2" style={{ maxWidth: "350px" }}>
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

export default withStyles(styles)(OnDemand);
