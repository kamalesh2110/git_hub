import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "../App.css";

export default function Card({ props, setCardState, setUserData }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <div className="Card" style={{}}>
          {props.avatar_url && props.avatar_url.length > 0 ? (
            <img
              src={props.avatar_url}
              alt="Profile img"
              width="200"
              height="200"
            ></img>
          ) : (
            <Spinner animation="border" />
          )}
          <p>{props.name}</p>
          <p>{props.company}</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <button>More Details</button>
          <button
            onClick={(e) => {
              setCardState(false);
              setUserData({});
            }}
          >
            Back{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
