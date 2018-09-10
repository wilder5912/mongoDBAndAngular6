import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CommonService {
  constructor(private http: HttpClient , public router: Router) { }

  saveUser(user): Observable<Object> {

    return this.http.post<Object>('http://localhost:9090/api/SaveUser/', JSON.stringify(user),
      { headers: { 'Content-Type': 'application/json; charset=utf-8'}
      }
    );
  }
  deleteUser(id): Observable<Object>{
    return this.http.post<Object>('http://localhost:9090/api/deleteUser/', JSON.stringify({'id': id}),
      { headers: { 'Content-Type': 'application/json; charset=utf-8'}
      }
    );
  }
  GetUser(): Observable<Object> {
    return this.http.get<Object>('http://localhost:9090/api/getUser/',
      { headers: { 'Content-Type': 'application/json; charset=utf-8'}
      }
      );
  }
}
