import {Avatar} from '../avatar';
import { UserContext } from "../contexts/user";

export const NavigationBar = () => {

  return (
    <UserContext.Consumer>
      {(user) => <Avatar user={user} size={user.avatarSize} />}
    </UserContext.Consumer>
  );
};
