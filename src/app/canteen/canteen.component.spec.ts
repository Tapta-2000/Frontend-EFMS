import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CanteenComponent } from './canteen.component';

describe('CanteenComponent', () => {
  let component: CanteenComponent;
  let fixture: ComponentFixture<CanteenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanteenComponent ],
      imports:[HttpClientModule,ReactiveFormsModule,FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanteenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
