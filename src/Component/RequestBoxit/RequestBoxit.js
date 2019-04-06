import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./RequestBoxit.css";
import * as logo from "../../Assets/driver.png";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#5C0317"
  },
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160
  },
  textField: {
    [`& fieldset`]: {
      borderRight: 0,
      borderRadius: 58
    },
    width: 1000
  }
});

class RequestBoxit extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="request">
        <div className="requestdiv">
          <div className="form">
            <div className="textb">Request for a BoxIt Delivery Driver</div>
            <div>
              <input
                type="text"
                placeholder="Pickup Address"
                style={{
                  width: "463px",
                  height: "70px",
                  borderRadius: "40px 40px 40px 40px",
                  marginTop: "44px",
                  fontSize: "26px",
                  color: "#AAAAAA",
                  textAlign: "center"
                }}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Drop Address"
                style={{
                  width: "463px",
                  height: "70px",
                  borderRadius: "40px 40px 40px 40px",
                  marginTop: "44px",
                  fontSize: "26px",
                  color: "#AAAAAA",
                  textAlign: "center"
                }}
              />
            </div>
            <div>
              <button
                type="button"
                style={{
                  width: "463px",
                  height: "70px",
                  borderRadius: " 40px 40px 40px 40px ",
                  marginTop: "44px",
                  backgroundColor: "#5C0426",
                  // fontFamily: Montserrat,
                  fontSize: "26px",
                  color: "#FFFFFF"
                }}
              >
                Request BoxIt
              </button>
            </div>
          </div>
          <div>
            <img src={logo} />
          </div>
        </div>
        <div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
        </div>
      </div>
    );
  }
}

RequestBoxit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RequestBoxit);
