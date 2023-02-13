import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  baseurl="http://localhost:3000/room"
  constructor(private room: HttpClient) {}

  roomApi(): Observable<any> {
    return this.room.get(this.baseurl);
  }
}
