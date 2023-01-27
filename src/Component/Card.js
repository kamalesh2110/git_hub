import React from "react";

export default function Card({ props }) {
  return (
    <div>
      <img
        src={props.avatar_url}
        alt="Profile img"
        width="200"
        height="200"
      ></img>
    </div>
  );
}
