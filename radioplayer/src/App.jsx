
import { useState, useEffect } from "react";
//import React from "react";
import Station from "./Station";

//  api : https://api.sr.se/api/v2/channels/?format=json&size=100

function App() {
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    fetch("https://api.sr.se/api/v2/channels/?format=json&size=10")
      .then((response) => response.json())
      .then((data) => {
        setChannel(data.channels);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {channel.map((station) => {
        return <Station station={station} />;
      })}
      <div>Nasrin Kazi Haque</div>
    </div>
  );
}

export default App