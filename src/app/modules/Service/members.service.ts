import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  url = "http://localhost:3000/apartment";
  constructor(private http: HttpClient) { }

  memberDetails(): Observable<any> {
    return this.http.get(this.url);
  }
}
