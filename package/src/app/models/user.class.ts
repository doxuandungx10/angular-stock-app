import {Group} from './group.class';
import {Role} from './role.class';

export class User {
  userId: number;
  userName: string;
  name: string;
  phone: string;
  email: string;
  createdDate: Date;
  //status: Status;
  groups?: Group[];
  roles?: Role[];
  status: string;
  groupName: string;
  updatedDate: Date;
  groupId: number;
  roleIds: [] = [];
  password?: string;

  firstName: string;
  id: number;
  lastName: string;
  token: string;
  username: string;

}
export interface Status {
  key: number;
  value: string ;
}
export interface BaseData {
  id: number;
  name: string ;
}
export interface InitialData {
  warehousePermissions: BaseData[];
  units: BaseData[];
  deviceStatus: BaseData[];
  roles: BaseData[];
  config: Config;
}
export interface Config {
  ngayTonKhoDauKi: string;
}
