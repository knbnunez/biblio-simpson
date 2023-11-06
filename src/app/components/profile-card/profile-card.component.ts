import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {
  @Input() profile: Profile | undefined;
  @Input() width: string = '100%'; // Default = 100%
  @Input() height: string = '100%'; // Default = 100%
  //

}
