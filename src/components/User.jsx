import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const User = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: "LOGIN", payLoad: { userId: 1, userName: "User2" } });
  };

  useEffect(() => {
    console.log("currentUser", currentUser);
  }, [currentUser]);

  return (
    <>
      <h1>User</h1>
      {currentUser ? (
        <p>Logged in as {currentUser.userName}</p>
      ) : (
        <div>
          <input type="button" value="Login" onClick={handleLogin} />
        </div>
      )}
      <Link to="/">Home</Link>
    </>
  );
};
