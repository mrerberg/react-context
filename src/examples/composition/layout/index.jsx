import { NavigationBar } from "../navigation-bar";

export const Layout = ({ userAvatarSlot, footerSlot, headerSlot }) => {
  return (
    <>
      {headerSlot}

      <NavigationBar userAvatarSlot={userAvatarSlot} />

      <h1>Its composition example!</h1>
      
      {footerSlot}
    </>
  );
};
