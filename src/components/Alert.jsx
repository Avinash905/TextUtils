import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "55px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type}`}
          style={{ height: "58px" }}
          role="alert"
        >
          <strong>
            {props.alert.type[0].toUpperCase() + props.alert.type.slice(1)}
          </strong>
          : {props.alert.msg}
        </div>
      )}
    </div>
  );
}
