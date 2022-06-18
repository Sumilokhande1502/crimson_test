import { Component, OnInit } from '@angular/core';
import { faFileCircleCheck, faNewspaper, faDatabase, faBrain, faFilter, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-key-features',
  templateUrl: './key-features.component.html',
  styleUrls: ['./key-features.component.scss']
})
export class KeyFeaturesComponent implements OnInit {
  faFileCircleCheck = faFileCircleCheck;
  faNewspaper = faNewspaper;
  faDatabase = faDatabase;
  faBrain = faBrain;
  faFilter = faFilter;
  faArrowTrendUp = faArrowTrendUp;
  constructor() { }

  ngOnInit(): void {
  }

}
