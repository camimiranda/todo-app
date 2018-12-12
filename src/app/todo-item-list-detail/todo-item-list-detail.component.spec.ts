import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemListDetailComponent } from './todo-item-list-detail.component';

describe('TodoItemListDetailComponent', () => {
  let component: TodoItemListDetailComponent;
  let fixture: ComponentFixture<TodoItemListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
