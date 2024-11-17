export const CurrentUser = (props) => {
  return (
    (props && props.currentUser) ? (
      <p>Logged in as {props.currentUser.userName}</p>
    ) : (
      <p>Not logged in</p>
    )
  )
};