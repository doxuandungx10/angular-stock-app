import { Injectable } from '@angular/core';
import { BaseService } from '../shared/base-service/base-service.service';
import { Observable } from 'rxjs';
import { UrlConstant } from '../shared/constants/url.class';

@Injectable()
export class UserService extends BaseService {
  getUser(search: any): Observable<any> {
    return this.post(UrlConstant.USERS, search);
  }
  addUser(user): Observable<any> {
    return this.post(UrlConstant.USERS, user);
  }
  deleteUser(id: number): Observable<any> {
    return this.delete(UrlConstant.USERS + id, null);
  }
  updateUser(user): Observable<any> {
    return this.put(UrlConstant.USERS, user);
  }
  getUserByUsername(username): Observable<any> {
    return this.get(UrlConstant.USERS + '/' + username);
  }
  facebookAuthenticate(accessToken): any {
    return this.post('/Login/Facebook/', { token: accessToken });
  }
  confirmUser(code: any): any {
    return this.post('/User/ConfirmUser/' + code, null);
  }
  googleAuthenticate(accessToken): any {
    return this.post('/Login/Google/', { token: accessToken });
  }
  getCurrentUserInfo(): any {
    return this.get('/User/CurrentInfo');
  }
  updateCurrentUserInfo(userInfo): any {
    return this.put('/User/UpdateCurrentInfo', userInfo);
  }
  changePassword(item): any {
    return this.post('/User/ChangePassword', item);
  }
}
