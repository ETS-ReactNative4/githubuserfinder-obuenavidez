import React from "react";

import PropTypes from "prop-types";
import Repos from "./Repos";

import { Container, Row, Col } from "reactstrap";
import "./components.css";

import location from "../location.jpg";
const User = props => {
  const { currentUserData, userRepos } = props;
  const { userData } = currentUserData;
  const { repos, isFetching } = userRepos;
  console.log(currentUserData);

  return (
    <div>
      <Container>
        <Row>
          <Col className="col-md-4">
            <h3>{userData.name}</h3>
            <p>@username : {userData.login}</p>
            <img //eslint-disable-line
              style={{ alt: "user-img", width: "150px", height: "150px" }} //eslint-disable-line
              src={userData.avatar_url}
            />
            <p>
              <b>ID:</b> {userData.id}
              <hr />
              <b>URL: </b>
              {userData.html_url}
              <br />
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="button2">View Profile</button>
              </a>
              <hr />
              <b>Type:</b>
              {userData.type}
              <hr />
              <b>Followers:</b>
              <nbsp />
              <nbsp />
              {userData.followers}
              <hr />
              <img
                src={location}
                alt="logo"
                width="20px"
                height="30px" //eslint-disable-line />
                // className="App-logo"
              />
              <nbsp />
              <nbsp />
              <b> Location:</b>
              <nbsp />
              <nbsp />
              {userData.location}
              <hr />
            </p>
          </Col>
          <Col className="col-md-8">
            {!currentUserData.isFetching &&
              !userRepos.isFetching &&
              repos.length === 0 && (
                <h2 className="ErrMessage">
                  No repos found for user {userData.login}
                </h2>
              )}
            {!isFetching && repos.length > 0}
            <h3>Repos</h3>

            <Repos repos={repos} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

User.propTypes = {
  currentUserData: PropTypes.object.isRequired,
  userRepos: PropTypes.object.isRequired
};

export default User;
