import React from "react";
import PropTypes from "prop-types";

const Repos = props => (
  <ul>
    {props.repos.map(repo => (
      <li key={repo.id}>
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
          <h4>{repo.name}</h4>
        </a>
        <p>
          <i>Description : </i>
          {repo.description}
        </p>
        <p>
          <i>Contributors : </i>
          {repo.size}
        </p>

        <hr />
      </li>
    ))}
  </ul>
);

Repos.propTypes = {
  repos: PropTypes.array.isRequired
};

export default Repos;
