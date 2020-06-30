import React, { useEffect, useState } from "react";

const UserDetails = props => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const run = async () => {
      const user = await fetch(
        "https://jsonplaceholder.typicode.com/users/4"
      ).then(r => r.json());
      setTimeout(() => {
        setUser(user);
      }, 1000);
    };
    run();
  }, []);

  const style = {
    border: "2px solid",
    padding: "1rem"
  };
  return (
    <div style={style}>
      <h3>User details feature</h3>
      {!Object.keys(user).length ? (
        "loading..."
      ) : (
        <div>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
