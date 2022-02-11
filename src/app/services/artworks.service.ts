import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Artwork } from '../models/artwork';

@Injectable({
  providedIn: 'root',
})
export class ArtworksService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Array<any>>(this.url);
  }

  add(artwork: Artwork) {
    return this.http.post(this.url, artwork);
  }
}
