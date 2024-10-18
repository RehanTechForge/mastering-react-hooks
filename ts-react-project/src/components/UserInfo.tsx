import { Info } from "../types/types";

type UserInfoProps = {
  user: Info;
};
const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <div>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
    </div>
  );
};

export default UserInfo;
