import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./Phone.css";
import * as phone from "../../Assets/01.png";
import * as playstore from "../../Assets/google-play-badge-en.png";
import * as burger from "../../Assets/580b57fcd9996e24bc43c1a8.png";

const styles = theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: '#5C0317'
  }
});

class Phone extends Component {
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
      <div>
        <div
          className="phone"
        >
          <div className="phone1">
            <img src={phone} id="phone" />
          </div>
          <div className="middle">
            <div className="phonetext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              egestas feugiat felis. Mauris lobortis nisl nec mi convallis
              finibus. Nulla facilisi. Donec urna orci, placerat vestibulum
              sapien eget, laoreet egestas elit.
            </div>
            <div className="playstore">
              <img src={playstore} id="playstore"/>
            </div>
          </div>
          <div className="burger">
            <img src={burger} id="burger" />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Phone);
