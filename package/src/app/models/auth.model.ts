import {User} from './user.class';
import {Action} from './action.model';

export interface AuthModel {
  id?: number;
  authId?: string;
  token?: string;
  user?: User;
  actions?: Action[];
  expiresIn?: number;
}
