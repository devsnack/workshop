// Controlled Forms
// 💯 Control the input value

import * as React from "react";

function UsernameForm({ onSubmitUsername }) {
  const [username, setUsername] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  function handleChange(event) {
    setUsername(event.target.value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function Fex62() {
  const onSubmitUsername = (username) => alert(`You entered: ${username}`);
  return (
    <div style={{ minWidth: 400 }}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  );
}

export default Fex62;
