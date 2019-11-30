import React, { useState } from "react";
import { useAuth0 } from "../../auth/react-auth0-spa";

const Profile = () => {
  const { loading, user } = useAuth0();
  const [formAddress, setFormAddress] = useState("");
  const [address, setAddress] = useState("");

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  const setHTMLWithXSS = () => {
    return { __html: address };
  };

  return (
    <>
      <h2>Successfully logged in!</h2>
      <h3>Please enter your address: </h3>
      <input
        type="text"
        value={formAddress}
        onChange={e => setFormAddress(e.target.value)}
      />
      <button onClick={() => setAddress(formAddress)}>Save Address</button>
      <div>
        <p>Your saved address: </p>
        <p dangerouslySetInnerHTML={setHTMLWithXSS()}></p>
      </div>
    </>
  );
};

export default Profile;
