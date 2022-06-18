import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChooseTrinkaComponent } from './why-choose-trinka.component';

describe('WhyChooseTrinkaComponent', () => {
  let component: WhyChooseTrinkaComponent;
  let fixture: ComponentFixture<WhyChooseTrinkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyChooseTrinkaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyChooseTrinkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
