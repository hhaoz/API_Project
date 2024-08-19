import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from '../models/profile.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url = 'http://localhost:3000/profile';
  profileURL = 'http://localhost:3000/profile?id=';
  // profilesURL = 'http://localhost:3000/profile/all';
  profiles: Profile[] = [];

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    // this.http.get(`${this.url}/all`).subscribe((data) => {
    //   this.profiles = data as Profile[];
    //   console.log(data);
    // });
    // this.getProfiles();
  }

  // getProfiles() {
  //   return this.http.get(this.profileURL).subscribe((data) => {
  //     console.log(data);
  //   });
  // }

  getAllProfiles() {
    return this.http.get<Profile[]>(`${this.url}/all`, {
      headers: {
        Authorization: this.authService.idToken,
      },
    });
  }

  getOneProfile(id: string) {
    return this.http.get<Profile>(`${this.profileURL}/${id}`);
  }

  addProfile(profile: Profile) {
    return this.http.post<Profile>(this.url, profile);
  }

  updateProfile(id: string, profile: Profile) {
    return this.http.put<Profile>(`${this.url}/${id}`, profile);
  }

  deleteProfile(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
