import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutlocationComponent } from './aboutlocation.component';

describe('AboutlocationComponent', () => {
  let component: AboutlocationComponent;
  let fixture: ComponentFixture<AboutlocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutlocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
