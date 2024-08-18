import {Component, Input} from '@angular/core';
import {CatModel} from "../../models/cat.model";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule
  ],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})
export class CatCardComponent {
  @Input() cat!: CatModel;
}
