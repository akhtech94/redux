import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CurrentUser } from "./CurrentUser";

export const Home = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <>
      <h1>Home</h1>
      <CurrentUser currentUser={currentUser} />
      <Link to="/user">User</Link>
    </>
  );
};
