import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    // 💰 USE THIS CODE TO UPDATE STATE
    // setWalk(!walk);
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="py-2 px-2 bg-green-600 text-white"
      >
        Change to {walk ? "Stop" : "Walk"}
      </button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}
