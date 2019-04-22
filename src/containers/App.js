import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { selectUser, fetchUserAndRepos } from "../actions";
import Picker from "../components/Picker";
import User from "../components/User";
import Header from "../components/Header";
//import Footer from "../components/Footer";

import { Container, Row, Col } from "reactstrap";

import "./containers.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(user) {
    const { dispatch } = this.props;
    dispatch(selectUser(user));
    dispatch(fetchUserAndRepos(user));
  }

  render() {
    const { currentUser, currentUserData, userRepos } = this.props;
    const { userData } = currentUserData;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <center>
                <Picker onSubmit={this.handleSubmit} />
              </center>
            </Col>
          </Row>
          <Row>
            <Col>
              {currentUserData.isFetching && <h2>Loading...</h2>}
              {!currentUserData.isFetching && userData.message && (
                <div>
                  <h2 className="ErrMessage">{userData.message + "!!!"}</h2>
                  {/* <p>{userData.documentation_url}</p> */}
                </div>
              )}
              {currentUser !== "" &&
                !userData.message &&
                !currentUserData.isFetching && (
                  <User
                    currentUserData={currentUserData}
                    userRepos={userRepos}
                  />
                )}
            </Col>
          </Row>
        </Container>
        <center>{/* <Footer /> */}</center>
      </div>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { currentUser, currentUserData, userRepos } = state;
  return {
    currentUser,
    currentUserData,
    userRepos
  };
}

// ------ Container , Rows , Cols  PropTypes

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string
    ])
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    // order: stringOrNumberProp,
    // offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array
};
Row.propTypes = {
  noGutters: PropTypes.bool,
  // see https://reactstrap.github.io/components/form Form Grid with Form Row
  form: PropTypes.bool
};

export default connect(mapStateToProps)(App);
