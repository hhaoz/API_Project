import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileState } from '../../ngrx/profile/profile.state';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
import * as ProfileActions from '../../ngrx/profile/profile.action';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-profiles',
  standalone: true,
  imports: [AsyncPipe, ProfileCardComponent],
  templateUrl: './list-profiles.component.html',
  styleUrl: './list-profiles.component.scss',
})
export class ListProfilesComponent {
  profile$!: Observable<ProfileState>;
  singleProfileId: string | undefined;

  constructor(
    private store: Store<{ profile: ProfileState }>,
    private route: ActivatedRoute,
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.profile$ = this.store.select('profile');
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.singleProfileId = id;
      this.store.dispatch(ProfileActions.getOneProfile({ id }));
    } else {
      this.store.dispatch(ProfileActions.getAllProfiles());
    }
  }
}
