import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./DeliverFooter.css";
import * as Delivery from "../../Assets/Group_829.png";
import * as playstore from "../../Assets/google-play-badge-en.png";

let today = new Date();
let year = today.getFullYear();

const styles = theme => ({
  root: {
    flexGrow: 1
    // backgroundColor: "#5C0317"
  }
});

class DeliverFooter extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <div className="Deliverfooter">
          <div className="Deliverfooter2">
            <div>
              <img src={Delivery} id='footerdeliver' />
            </div>
            <div className="boxit">
              <div className="AboutBoxit">About Box-it</div>
              <div className="HowBoxitWorks">How Box-it Works</div>
              <div className="Safety">Safety</div>
              <div className="Careers">Careers</div>
              <div className="Countries">Countries</div>
              <div className="FAQs">FAQs</div>
            </div>
            <div className="dispatcher">
              <div className="AboutBoxit">Be a Dispatcher </div>
              <div className="HowBoxitWorks">Sign up to be a Dispatcher</div>
              <div className="Safety">Requirements</div>
              <div className="Careers">Driver App</div>
            </div>
            <div className="boxit" style={{ maxWidth: "268px" }}>
              <img src={playstore} id='footerplaystore' />
            </div>
          </div>
          <div className="bottomfooter">
            <div className="bottomfooter1">Accessibility</div>
            <div className="bottomfooter2">Terms</div>
            <div className="bottomfooter3">© {" " + year} BoxIt</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(DeliverFooter);
