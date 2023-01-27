import React from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";

export default function Main() {
  const [userdata, setUserData] = useState({});
  const [user, setUser] = useState("");
  const [cardstate, setCardState] = useState(false);

  const fetchInfo = () => {
    const url = "https://api.github.com/users/" + user;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response.data.avatar_url);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setCardState(true);
  };

  return (
    <div>
      <div>
        <h1>Welcome to Git User Details</h1>
        {!cardstate && (
          <div>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUser(e.target.value);
              }}
            ></input>
            <button
              onClick={(e) => {
                fetchInfo(e);
              }}
            >
              Get Details
            </button>
          </div>
        )}
      </div>
      {cardstate && <Card props={userdata}></Card>}
    </div>
  );
}
