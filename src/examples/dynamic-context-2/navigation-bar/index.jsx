import {Avatar} from '../avatar'
import { useUserContext } from '../contexts/user';

export const NavigationBar = () => {
  const user = useUserContext();

  return <Avatar user={user} size={user.avatarSize} />;
};
