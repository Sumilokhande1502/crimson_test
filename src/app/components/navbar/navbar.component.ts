import { Component, OnInit } from '@angular/core';
import { faFileCircleCheck, faNewspaper, faDatabase, faBrain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }
  faCoffee = faFileCircleCheck;
  faHandPaper = faNewspaper;
  faDatabase = faDatabase;
  faBrain = faBrain
  ngOnInit(): void {
  }

}
