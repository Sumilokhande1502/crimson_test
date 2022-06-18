import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-trinka',
  templateUrl: './why-choose-trinka.component.html',
  styleUrls: ['./why-choose-trinka.component.scss']
})
export class WhyChooseTrinkaComponent implements OnInit {

  constructor() { }

imagePath = [
    {
    card: "card1",
    heading: 'Boost Citations',   
  },{
    card: "card2",
    heading: 'Reach the Right Audiance', 
  },{
    card: "card3",
    heading: 'Save Research Time'
  }
]
  ngOnInit(): void {
    console.log(this.imagePath);
    
  }

}
