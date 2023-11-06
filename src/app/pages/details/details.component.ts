import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  id: string = "";

  constructor(private actRoute: ActivatedRoute) {
    this.id = this.actRoute.snapshot.params['id'];
  }
}