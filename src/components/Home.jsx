import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {

  return (
    <>
      <h1>Home</h1>
      <Link to="/user">User</Link>
    </>
  );
};
