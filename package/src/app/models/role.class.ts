import {Action} from './action.model';

export interface Role {
  id?: number;
  roleId?: string;
  roleName?: string;
  createdDate?: Date;
  actionResponses?: Action[];
  actionId?: [];
  roleDescription?: string;
}
