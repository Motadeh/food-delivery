import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./MakeMoney.css";
import * as lady from "../../Assets/Mask_Group_52.png";
// import { url } from "inspector";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#5C0317"
  }
});

class MakeMoney extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="makemoney">
        <div className="makemoneytext1">Make Money On Boxit </div>
        <div className="makemoneytext2">Become a Driver/Dispatcher</div>
        <div className="makemoneytext3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          egestas feugiat felis. Mauris lobortis nisl nec mi convallis finibus.
          Nulla facilisi. Donec urna orci, placerat vestibulum sapien eget,
          laoreet egestas elit.
        </div>
        <div className="makemoneytext4">Register As a Dispatcher</div>
      </div>
    );
  }
}

export default withStyles(styles)(MakeMoney);
