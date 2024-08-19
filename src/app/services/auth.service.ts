import { Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: Auth,
    private route: Router,
  ) {}

  idToken: string = '';

  async loginWithGoogle() {
    const credential = await signInWithPopup(
      this.auth,
      new GoogleAuthProvider(),
    );
    this.idToken = await credential.user.getIdToken();
    // console.log(this.idToken);
    if (this.idToken) {
      await this.route.navigate(['/profiles']);
    }
  }

  async logout() {
    await this.auth.signOut();
  }
}
