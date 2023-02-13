import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  detailurl = "http://192.168.0.35:3000/apartment";
  constructor(private http: HttpClient) { }

  detailsApi(): Observable<any> {
    return this.http.get(this.detailurl);
  }
}
