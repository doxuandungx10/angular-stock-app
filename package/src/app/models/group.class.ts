import {Role} from './role.class';

export interface Group {
  id: number;
  groupId: string;
  groupName: string;
  description: string;
  createdDate: Date;
  roleResponses: Role [];
  roleIds: number [];
}
