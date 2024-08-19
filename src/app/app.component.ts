import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileService } from './services/profile.service';
import { AuthService } from './services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProfileCardComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'API-project';
  isUserLoggedIn = false;

  constructor(
    public profileService: ProfileService,
    private authService: AuthService,
    private auth: Auth,
  ) {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        console.log('User is logged in');
        this.isUserLoggedIn = true;
        this.authService.idToken = await user.getIdToken();
      } else {
        this.authService.idToken = '';
        this.isUserLoggedIn = false;
      }
    });
  }

  async login() {
    await this.authService.loginWithGoogle();
  }

  async logout() {
    await this.authService.logout();
  }
}
