import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() imgPath: any;
  @Input() cardHeading: any
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.imgPath, "image path");
    
  }

}
