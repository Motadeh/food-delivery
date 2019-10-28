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
              Food Delivery Directly To Your Doorstep
              {/* <p>Pickup, Delivery</p>
              <p>and Food Ordering</p>
              <p>Made Easy</p> */}
            </div>

            <div className="pickupinfo">
              <input
                id="doorstepinput1"
                type="text"
                placeholder="Pickup Address"
              />

              <input
                id="doorstepinput2"
                type="text"
                placeholder="Delivery Address"
              />

              <button
                id="doorstepbutton"
                type="button"
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
