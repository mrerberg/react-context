export const Avatar = ({ user, avatarSize }) => {
  return <img src={user.img} width={avatarSize} height={avatarSize} alt="avatar" />;
};
