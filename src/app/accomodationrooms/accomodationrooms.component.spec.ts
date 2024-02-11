import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonsearchComponent } from '../commonsearch/commonsearch.component';

import { AccomodationroomsComponent } from './accomodationrooms.component';

describe('AccomodationroomsComponent', () => {
  let component: AccomodationroomsComponent;
  let fixture: ComponentFixture<AccomodationroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccomodationroomsComponent ,CommonsearchComponent],
      imports:[HttpClientModule,ReactiveFormsModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccomodationroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
