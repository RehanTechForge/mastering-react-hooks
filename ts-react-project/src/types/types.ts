export interface Info {
  id: number;
  name: string;
  email: string;
}

export interface AdminInfoList extends Info {
  role: string;
}
