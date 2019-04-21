import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerAccountListComponent } from './owner-account-list.component';

describe('OwnerAccountListComponent', () => {
  let component: OwnerAccountListComponent;
  let fixture: ComponentFixture<OwnerAccountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerAccountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerAccountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
