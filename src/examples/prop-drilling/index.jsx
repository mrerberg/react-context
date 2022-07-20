import { Page } from "./page";

import { USER } from "../../constants";

export const PropDrillingApp = () => {
  return (
    <div className="App-header">
        <Page user={USER} avatarSize={USER.avatarSize} />
    </div>
  );
};
