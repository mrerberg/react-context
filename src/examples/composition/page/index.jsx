import { Layout } from "../layout";
import { Avatar } from "../avatar";
import {NavigationBar} from '../navigation-bar';

export const Page = ({ user }) => {
  const headerSlot = (
    <NavigationBar>
      <Avatar user={user} size={user.avatarSize} />
    </NavigationBar>
  );

  return <Layout headerSlot={headerSlot} />;
};
