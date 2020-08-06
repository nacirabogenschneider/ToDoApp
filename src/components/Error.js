import React from "react";

const Error = ({ touched, message }) => {
  if (!touched) {
    return (
      <div
        className="form-message invalid"
        style={{ color: "red", paddingTop: 0, fontSize: 12 }}
      >
        &nbsp;
      </div>
    );
  }
  if (message) {
    return (
      <div
        className="form-message invalid"
        style={{ color: "red", paddingTop: 0, fontSize: 12 }}
      >
        {message}
      </div>
    );
  }
  return <div></div>;
};

export default Error;
