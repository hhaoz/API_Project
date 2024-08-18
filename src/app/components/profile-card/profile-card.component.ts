import { Component, Input } from '@angular/core';
import { Profile } from '../../models/profile.model';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [MatCardModule, MatButton],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input() profile!: Profile;
}
