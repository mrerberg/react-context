import { Layout } from "../layout";
import { Avatar } from "../avatar";

export const Page = ({ user }) => {
  const userAvatar = <Avatar user={user} size={user.avatarSize} />;

  return <Layout userAvatarSlot={userAvatar} />;
};
