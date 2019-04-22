import React from "react";
import PropTypes from "prop-types";
import "./components.css";

const Picker = props => {
  let input;
  const { onSubmit } = props;
  return (
    <span>
      <h5>Search for a Github username</h5>
      <form
        className="App"
        onSubmit={e => {
          e.preventDefault();
          if (input.value !== "") {
            onSubmit(input.value);
          }
        }}
      >
        <input
          type="text"
          placeholder="type @githubusername ..."
          ref={node => {
            input = node;
          }}
        />
        <input type="submit" className="button1" value="Go" />
      </form>
      <hr />
    </span>
  );
};

Picker.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Picker;
