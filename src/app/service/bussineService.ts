import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Business } from '../model/Business';

@Injectable()
export class BussineService {

    constructor(private http: HttpClient , public router: Router) { }
    public getBussine(): Observable<Object>  {
      return this.http.get<Object>('http://localhost:8080/business/getBusinessDTO');
     }
     public getBussineAll(): Observable<Object>  {
      return this.http.get<Object>('/api',
        { headers: { 'Content-Type': 'application/json; charset=utf-8'}});
     }
}
