import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const User = () => {

  return (
    <>
      <h1>User</h1>
      <div><input type="button" value="Login" onClick={() => {}} /></div>
      <Link to="/">Home</Link>
    </>
  );
};
