import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFavoriteComponent } from './edit-favorite.component';

describe('EditFavoriteComponent', () => {
  let component: EditFavoriteComponent;
  let fixture: ComponentFixture<EditFavoriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditFavoriteComponent]
    });
    fixture = TestBed.createComponent(EditFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
