import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, from, catchError, throwError} from 'rxjs';
import {environment} from "../../environments/environment";
import {LocalStorage} from "./local-storage";
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;
  private apiHost = environment.apiHost;

  constructor(private http: HttpClient) { }


  async getCurrentWeatherPromise(city: string): Promise<any> {
    const url = `${this.apiUrl}${city}?apiKey=${this.apiKey}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': this.apiKey,
        'X-RapidAPI-Host': this.apiHost
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  }

  getCurrentWeather(city: string): Observable<any> {
    return from(this.getCurrentWeatherPromise(city)).pipe(
      catchError(error => {
        console.error('Error :', error);
        return throwError('Error getting weather data');
      })
    );
  }
}


