import { Component, OnInit } from '@angular/core';
//
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Debería estar en un componente más adecuado
  profiles: Profile[] = [];
    
  constructor(private service: ProfileService) {}

  ngOnInit(): void {
    this.service.getProfiles().subscribe((profiles: Profile[]) => {
      this.profiles = profiles;
    });
  }
}
