import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Main() {
  const [userdata, setUserData] = useState({});

  const fetchInfo = () => {
    axios
      .get("https://api.github.com/users/kamalesh2110")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Welcome to Git User Details</h1>
      <button
        onClick={(e) => {
          fetchInfo(e);
        }}
      >
        Get Details
      </button>
    </div>
  );
}
