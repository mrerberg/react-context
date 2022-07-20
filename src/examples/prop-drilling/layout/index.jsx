import { NavigationBar } from "../navigation-bar";

export const Layout = ({ user, avatarSize }) => {
  return (
    <>
      <NavigationBar user={user} avatarSize={avatarSize} />
      <h1>Its props drilling example!</h1>
    </>
  );
};
