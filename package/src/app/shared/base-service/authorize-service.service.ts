import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AppConfigService} from '../../../app-config.service';
import {Constant} from '../constants/constant.class';

@Injectable()
export class AuthorizeService {

  constructor(
  ) {
  }
  
  public createHeaders() {
    // Why "authorization": see CustomLogoutSuccessHandler on server
    return new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken()).set('Language', this.getLanguage());;
  }
  private getToken() {
    return localStorage.getItem(Constant.TOKEN);
  }
  private getLanguage() {
    let lang = localStorage.getItem(Constant.LANGUAGE);
    if (!lang) {
      localStorage.setItem(Constant.LANGUAGE, 'vi');
      lang = 'vi';
    }
    return lang;
  }
}
