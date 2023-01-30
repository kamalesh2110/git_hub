import React from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";
import "../App.css";

export default function Main() {
  const [userdata, setUserData] = useState({});
  const [user, setUser] = useState("");
  const [flag, setFlag] = useState();
  const [cardstate, setCardState] = useState(false);

  const fetchInfo = () => {
    const url = "https://api.github.com/users/" + user;
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        console.log(response.status);
        setUserData(response.data);
        setFlag(response.status);
        setCardState(true);
      })
      .catch((error) => {
        console.log(error);
        alert(user + " User not found ");
        setCardState(false);
        setUser("");
      });
  };

  return (
    <div>
      <div className="HeaderClass">
        <h1>Welcome to Git User Details</h1>
        {!cardstate && (
          <div>
            <input
              type="text"
              placeholder="Username"
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            ></input>
            <button
              className="button_info"
              onClick={(e) => {
                fetchInfo(e);
              }}
            >
              Get Details
            </button>
          </div>
        )}
      </div>

      {cardstate && (
        <Card
          props={userdata}
          setCardState={setCardState}
          setUserData={setUserData}
        ></Card>
      )}
    </div>
  );
}
