import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddCatagoryComponent } from './admin-add-catagory.component';

describe('AdminAddCatagoryComponent', () => {
  let component: AdminAddCatagoryComponent;
  let fixture: ComponentFixture<AdminAddCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddCatagoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
