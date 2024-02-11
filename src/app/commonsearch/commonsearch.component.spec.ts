import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';


import { CommonsearchComponent } from './commonsearch.component';

describe('CommonsearchComponent', () => {
  let component: CommonsearchComponent;
  let fixture: ComponentFixture<CommonsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonsearchComponent ],
      imports:[HttpClientModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
