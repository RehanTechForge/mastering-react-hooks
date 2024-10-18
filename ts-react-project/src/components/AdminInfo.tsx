import { AdminInfoList } from "../types/types";

type adminInfoListProps = {
  admin: AdminInfoList;
};
const AdminInfo = ({ admin }: adminInfoListProps) => {
  return (
    <div>
      <h1>{admin.id}</h1>
      <h1>{admin.name}</h1>
      <h1>{admin.email}</h1>
      <h1>{admin.role}</h1>
    </div>
  );
};

export default AdminInfo;
