import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsAndFamilyComponent } from './friends-and-family.component';

describe('FriendsAndFamilyComponent', () => {
  let component: FriendsAndFamilyComponent;
  let fixture: ComponentFixture<FriendsAndFamilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsAndFamilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendsAndFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
