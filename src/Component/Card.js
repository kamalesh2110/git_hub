import React from "react";

export default function Card({ props, setCardState, setUserData }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <div style={{ border: "1px solid black", background: "pink" }}>
        <img
          src={props.avatar_url}
          alt="Profile img"
          width="200"
          height="200"
        ></img>
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
  );
}
