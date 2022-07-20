import { Page } from "./page";
import { UserContext } from "./contexts/user";

import { USER } from "../../constants";

export const ContextApp = () => {
  return (
    <UserContext.Provider value={USER}>
      <Page />
    </UserContext.Provider>
  );
};
