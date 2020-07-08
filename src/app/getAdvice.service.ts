import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAdviceService {

constructor(private http: HttpClient) { }

getAdvices() {
  return this.http.get('https://api.adviceslip.com/advice');
}
}
