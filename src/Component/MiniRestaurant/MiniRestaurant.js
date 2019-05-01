import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./MiniRestaurant.css";
import * as store from "../../Assets/store.png";
import * as takeaway from "../../Assets/take-away.png";
import * as group from "../../Assets/group.png";
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

class MiniRestaurant extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="reheader">
        <div className="mrpickup">Popular Restaurants</div>
        <div className="reimg2">
          <div className="mrimgs2" style={{ maxWidth: "350px" }}>
            <div className="retext1a">Enter Pickup and Delivery Address</div>
            <div className="text2" style={{ maxWidth: "350px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              egestas feugiat felis. Mauris lobortis nisl nec mi convallis
              finibus. Nulla facilisi. Donec urna orci, placerat vestibulum
              sapien eget, laoreet egestas elit.
            </div>
          </div>

          <div className="mrimgs2">
            <div className="retext1b">
              Select Nearest And Preferred Dispatcher
            </div>
            <div className="retext2" style={{ maxWidth: "350px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              egestas feugiat felis. Mauris lobortis nisl nec mi convallis
              finibus. Nulla facilisi. Donec urna orci, placerat vestibulum
              sapien eget, laoreet egestas elit.
            </div>
          </div>

          <div className="mrimgs2">
            <div className="retext1c">Get It Picked Up and Delivered Quick</div>
            <div className="retext2" style={{ maxWidth: "350px" }}>
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
        {/* </div> */}
      </div>
    );
  }
}

export default withStyles(styles)(MiniRestaurant);
