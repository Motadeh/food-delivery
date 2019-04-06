import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./CourierService.css";
import Header2 from "../Header2/Header2";

const styles = theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: "#5C0317"
  }
});

class CourierService extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="Courierheader">
        <div>
          <Header2 />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(CourierService);
