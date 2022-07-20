import { Page } from "./page";

import { USER } from "../../constants";

export const CompositionApp = () => {
  return (
    <div className="App-header">
        <Page user={USER} avatarSize={USER.avatarSize} />
    </div>
  );
};
