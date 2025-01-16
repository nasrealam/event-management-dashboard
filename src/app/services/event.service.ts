import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly eventApi: string = 'http://localhost:3100/eventList';

  constructor(private http: HttpClient) {}

  // To post the event details
  postEventDetails(data: any) {
    return this.http.post(`${this.eventApi}`, data);
  }

  // To get the event List
  getEventList() {
    return this.http.get(`${this.eventApi}`);
  }

  // To delete the event
  deleteEvent(id: number) {
    return this.http.delete(`${this.eventApi}/${id}`);
  }

  // To update the event
  updateEvent(id: any, data: any) {
    return this.http.patch(`${this.eventApi}/${id}`, data);
  }
}
