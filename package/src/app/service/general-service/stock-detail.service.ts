import { BaseService } from './../../shared/base-service/base-service.service';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class StockDetailService extends BaseService {
  getBaseInfo(sym: any): Observable<any[]> {
    return this.get('/getliststockbaseinfo/' + sym);
  }
}
