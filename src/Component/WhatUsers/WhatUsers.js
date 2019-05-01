import { withStyles } from "@material-ui/core/styles";
import React, { Component } from "react";
import "./WhatUsers.css";
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

class WhatUsers extends Component {
  state = {};

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className="asheader">
        <div className="content">
          <div className="whatuserstext1">
            What Users Are Saying About BoxIt
          </div>
          <div className="users">
            <div className="user1">
              <div className="user1text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget justo justo. Ut vehicula nisl at nisl finibus, in fermentum
                dui ultricies. Aenean magna lectus, tempus nec augue at, laoreet
                viverra nunc. Nunc efficitur arcu eget nulla hendrerit, sed
                ultricies risus pharetra. In tristique pellentesque urna, in
                rutrum purus imperdiet malesuada. Sed facilisis, eros sit amet
                dignissim molestie, enim nisi placerat elit, pretium dapibus dui
                lorem id libero. Quisque quis neque id est tincidunt fringilla.
                Nunc pretium tellus a sodales elementum. Donec ipsum nisl,
                bibendum sit amet feugiat quis, porta quis mi. Quisque luctus
                tortor accumsan ligula pulvinar pellentesque. Maecenas erat
                orci, imperdiet in leo a, molestie commodo mauris. Sed auctor mi
                et metus consectetur, ac varius mi placerat. Morbi tincidunt
                finibus dolor, ac interdum nibh dignissim vel. Nam aliquet
                tincidunt felis eu convallis. Integer hendrerit facilisis diam,
                eu congue leo. Sed vestibulum, arcu a rhoncus pulvinar, elit
                dolor hendrerit dolor, tristique pharetra dolor nulla mattis
                justo. Duis erat lorem, scelerisque in mauris eu, pretium
                sagittis sem. Praesent in tortor nisl. Maecenas nulla eros,
                vulputate sit amet consequat dignissim, finibus in dolor. Fusce
                sed lectus suscipit est ultricies ullamcorper varius in turpis.
                Sed tincidunt, velit vitae vestibulum porta, enim nunc vulputate
                est, quis egestas mauris mauris sed quam. Mauris dapibus enim
                non nisl efficitur commodo. Pellentesque cursus a purus quis
                hendrerit. Mauris pharetra lacinia auctor.
              </div>
              <div style={{ borderRadius: "50%" }}>
                <Grid container justify="center" alignItems="center">
                  <Avatar
                    alt="Remy Sharp"
                    src={logo}
                    className={classes.bigAvatar}
                  />
                </Grid>
              </div>
              <div className="user1texta">Customer Name</div>
            </div>
            <div className="user2">
              <div className="user2text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eget justo justo. Ut vehicula nisl at nisl finibus, in fermentum
                dui ultricies. Aenean magna lectus, tempus nec augue at, laoreet
                viverra nunc. Nunc efficitur arcu eget nulla hendrerit, sed
                ultricies risus pharetra. In tristique pellentesque urna, in
                rutrum purus imperdiet malesuada. Sed facilisis, eros sit amet
                dignissim molestie, enim nisi placerat elit, pretium dapibus dui
                lorem id libero. Quisque quis neque id est tincidunt fringilla.
                Nunc pretium tellus a sodales elementum. Donec ipsum nisl,
                bibendum sit amet feugiat quis, porta quis mi. Quisque luctus
                tortor accumsan ligula pulvinar pellentesque. Maecenas erat
                orci, imperdiet in leo a, molestie commodo mauris. Sed auctor mi
                et metus consectetur, ac varius mi placerat. Morbi tincidunt
                finibus dolor, ac interdum nibh dignissim vel. Nam aliquet
                tincidunt felis eu convallis. Integer hendrerit facilisis diam,
                eu congue leo. Sed vestibulum, arcu a rhoncus pulvinar, elit
                dolor hendrerit dolor, tristique pharetra dolor nulla mattis
                justo. Duis erat lorem, scelerisque in mauris eu, pretium
                sagittis sem. Praesent in tortor nisl. Maecenas nulla eros,
                vulputate sit amet consequat dignissim, finibus in dolor. Fusce
                sed lectus suscipit est ultricies ullamcorper varius in turpis.
                Sed tincidunt, velit vitae vestibulum porta, enim nunc vulputate
                est, quis egestas mauris mauris sed quam. Mauris dapibus enim
                non nisl efficitur commodo. Pellentesque cursus a purus quis
                hendrerit. Mauris pharetra lacinia auctor.
              </div>
              <div style={{ borderRadius: "50%" }}>
                <Grid container justify="center" alignItems="center">
                  <Avatar
                    alt="Remy Sharp"
                    src={logo}
                    className={classes.bigAvatar}
                  />
                </Grid>
              </div>
              <div className="user2texta">Customer Name</div>
            </div>
          </div>
          <div className="subscribe">Subscribe to Newsletter</div>

          <div className="firsthandinfo">
            Get First hand Info on Promos and Bonuses. We keep your account
            details safe with us
          </div>
          <div className="firsthandinfoemail">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              style={{
                borderRadius: "58px 0px 0px 58px",
                marginTop: "44px",
                color: "#AAAAAA",
                textAlign: "center"
              }}
            />
            <button
              type="button"
              style={{
                borderRadius: " 0px 58px 58px 0px ",
                marginTop: "44px",
                backgroundColor: "#5C0426",
                color: "#FFFFFF"
              }}
            >
              Request BoxIt
            </button>
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
      </div>
    );
  }
}

WhatUsers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WhatUsers);
