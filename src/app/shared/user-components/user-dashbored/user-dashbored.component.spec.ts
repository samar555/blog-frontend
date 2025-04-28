import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboredComponent } from './user-dashbored.component';

describe('UserDashboredComponent', () => {
  let component: UserDashboredComponent;
  let fixture: ComponentFixture<UserDashboredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDashboredComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
