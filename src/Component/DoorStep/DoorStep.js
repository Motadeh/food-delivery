import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./DoorStep.css";

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class DoorStep extends Component {
  state = {};

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="AppDoorStep">
        <div className="DoorStep">
          <div className="DoorSteptext">
            <div className="food">
              Food Delivery Directly To Your Doorstep{" "}
              {/* <p>Pickup, Delivery</p>
              <p>and Food Ordering</p>
              <p>Made Easy</p> */}
            </div>

            <div>&nbsp;</div>
            <div>&nbsp;</div>

            <div className="pickupinfo">
              <input
                type="text"
                placeholder="Pickup Address"
                style={{
                  width: "432px",
                  height: "90px",
                  borderRadius: "58px 0px 0px 58px",
                  marginTop: "44px",
                  fontSize: "26px",
                  color: "#AAAAAA",
                  textAlign: "center"
                }}
              />

              <input
                type="text"
                placeholder="Delivery Address"
                style={{
                  width: "432px",
                  height: "90px",
                  marginTop: "44px",
                  fontSize: "26px",
                  color: "#AAAAAA",
                  textAlign: "center"
                }}
              />

              <button
                type="button"
                style={{
                  width: "355px",
                  height: "95px",
                  borderRadius: " 0px 58px 58px 0px ",
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
        </div>
      </div>
    );
  }
}

TabContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DoorStep);
