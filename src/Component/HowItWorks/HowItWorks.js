import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./HowItWorks.css";
import * as phone from "../../Assets/01.png";
import * as playstore from "../../Assets/google-play-badge-en.png";
import * as burger from "../../Assets/580b57fcd9996e24bc43c1a8.png";

const styles = theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: '#5C0317'
  }
});

class HowItWorks extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="hiwimg2">
        <div className="mrimgs2" style={{ maxWidth: "350px" }}>
          <div className="retext1a">Enter Pickup and Delivery Address</div>
          <div className="text2" style={{ maxWidth: "350px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            egestas feugiat felis. Mauris lobortis nisl nec mi convallis
            finibus. Nulla facilisi. Donec urna orci, placerat vestibulum sapien
            eget, laoreet egestas elit.
          </div>
        </div>

        <div className="mrimgs2">
          <div className="retext1b">
            Select Nearest And Preferred Dispatcher
          </div>
          <div className="retext2" style={{ maxWidth: "350px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            egestas feugiat felis. Mauris lobortis nisl nec mi convallis
            finibus. Nulla facilisi. Donec urna orci, placerat vestibulum sapien
            eget, laoreet egestas elit.
          </div>
        </div>

        <div className="mrimgs2">
          <div className="retext1c">Get It Picked Up and Delivered Quick</div>
          <div className="retext2" style={{ maxWidth: "350px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            egestas feugiat felis. Mauris lobortis nisl nec mi convallis
            finibus. Nulla facilisi. Donec urna orci, placerat vestibulum sapien
            eget, laoreet egestas elit.
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(HowItWorks);
