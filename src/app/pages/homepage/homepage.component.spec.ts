import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HomepageComponent } from "./homepage.component";
import { MaterialModule } from "src/app/shared/material/material.module";
import { CourseCardComponent } from "src/app/components/course-card/course-card.component";
import { UserCardComponent } from "src/app/components/user-card/user-card.component";

describe("HomepageComponent", () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageComponent, CourseCardComponent, UserCardComponent],
      imports: [MaterialModule],
    });
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
