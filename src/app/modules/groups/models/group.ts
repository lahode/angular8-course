import { User } from '../../../models/user';

export interface Group {
  _id: string;
  name: string;
  access: number;
  pub: boolean;
  owner: User;
  description?: string;
  url?: string;
  members?: User[];
  visibility?: boolean;
}
