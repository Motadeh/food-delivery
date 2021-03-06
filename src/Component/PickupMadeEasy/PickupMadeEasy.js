// import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./PickupMadeEasy.css";
import * as logo from "../../Assets/1261.png";
import * as playstore from "../../Assets/google-play-badge-en.png";

// function TabContainer(props) {
//   return <Typography component="div">{props.children}</Typography>;
// }

// TabContainer.propTypes = {
//   children: PropTypes.node.isRequired
// };

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class PickupMadeEasy extends Component {
  state = {};

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="App">
        <div className="deliver">
          <div className="text">
            <div className="pickup" style={{ maxWidth: "503px" }}>
              Pickup, Delivery
              and Food Ordering
              Made Easy
            </div>
            <div className="other" style={{ maxWidth: "602px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              egestas feugiat felis. Mauris lobortis nisl nec mi convallis
              finibus. Nulla facilisi. Donec urna orci, placerat vestibulum
              sapien eget, laoreet egestas elit.
            </div>

            <div>&nbsp;</div>
            <div>&nbsp;</div>

            <div className="available">Now Available On Android</div>
            <div>
              <img src={playstore} id="playstore" />
            </div>
          </div>
          <div className='pickupimg'>
            <img src={logo} id='pickupimg' />
          </div>
        </div>
      </div>
    );
  }
}

// TabContainer.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default PickupMadeEasy;
