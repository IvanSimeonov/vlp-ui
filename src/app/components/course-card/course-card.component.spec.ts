import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CourseCardComponent } from "./course-card.component";
import { MaterialModule } from "src/app/shared/material/material.module";

describe("CourseCardComponent", () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardComponent],
      imports: [MaterialModule],
    });
    fixture = TestBed.createComponent(CourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit("should create", () => {
    expect(component).toBeTruthy();
  });
});
