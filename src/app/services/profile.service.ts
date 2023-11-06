import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs';

import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  // profiles: Profile[] = [];
  uri: string = 'https://apisimpsons.fly.dev/api/personajes';

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    return this.http.get(`${this.uri}?limit=100`)
      .pipe(
        map((data: any) => data.docs.map((doc: any) => ({
          id: doc._id,
          name: doc.Nombre,
          img: doc.Imagen
        } as Profile)))
      );
  }
}
