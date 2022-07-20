import { NavigationBar } from "../navigation-bar";
import {USER} from '../../../constants';
import {UserContext} from '../contexts/user';

export const Layout = () => {
  return (
    <>
      <UserContext.Provider value={USER}>
        <NavigationBar />
      </UserContext.Provider>

      <h1>Its dynamic contexts example!</h1>
    </>
  );
};
