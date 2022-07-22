export const Layout = ({ headerSlot, footerSlot }) => {
  return (
    <>
      {headerSlot}

      <h1>Its composition example!</h1>

      {footerSlot}
    </>
  );
};
