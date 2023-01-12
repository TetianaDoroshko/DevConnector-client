import React from "react";
import PropTypes from "prop-types";

export const Alert = ({ alerts }) => {
  const alertMarkup = alerts.map((alert) => (
    <div
      key={alert.id}
      className={`alert alert-${alert.type ? alert.type : "light"}`}
    >
      {alert.message}
    </div>
  ));

  return (
    <div className="container alert-container">{alerts && alertMarkup}</div>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};
