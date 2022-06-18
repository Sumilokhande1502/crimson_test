import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import { CardsComponent } from './cards/cards.component';
import { KeyFeaturesComponent } from './key-features/key-features.component';
import { WhyChooseTrinkaComponent } from './why-choose-trinka/why-choose-trinka.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [CardsComponent, KeyFeaturesComponent, WhyChooseTrinkaComponent],
  imports: [
    CommonModule,
    MatCardModule, 
    FontAwesomeModule,
  ],
  exports:[CardsComponent, KeyFeaturesComponent, WhyChooseTrinkaComponent, FontAwesomeModule]
})
export class SharedModule { }
