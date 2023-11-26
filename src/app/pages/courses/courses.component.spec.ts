import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CoursesComponent } from "./courses.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MaterialModule } from "src/app/shared/material/material.module";
import { CourseCardComponent } from "src/app/components/course-card/course-card.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("CoursesComponent", () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent, CourseCardComponent],
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
    });
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
