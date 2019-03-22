import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./NoMatterTheSize.css";
import * as bike from "../../Assets/tgb-express-1.png";
import * as car from "../../Assets/9266-2019-toyota-corolla.png";
import * as van from "../../Assets/Ford-Transit-1.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#5C0317"
  }
});

class NoMatterTheSize extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="asheader">
        <div className="content">
          <div className="nomatterthesize">No matter the size</div>
          <div className="nomatterthesizetext">
            We have dispatchers across the country with different types of
            vehicles ranging from Motobikes, Salon Cars and vans.
          </div>
          <div className="img">
            <div className="imgs">
              <img src={bike} height="258px" />
            </div>
            <div className="imgs">
              <img src={car} height="258px" />
            </div>
            <div className="imgs">
              <img src={van} height="258px" />
            </div>
          </div>
          <div className="ondelivery" style={{ maxWidth: "454px" }}>
            <img src={van} />
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

export default withStyles(styles)(NoMatterTheSize);
