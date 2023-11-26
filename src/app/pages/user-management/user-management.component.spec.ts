import { ComponentFixture, TestBed } from "@angular/core/testing";

import { UserManagementComponent } from "./user-management.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MaterialModule } from "src/app/shared/material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CourseCardComponent } from "src/app/components/course-card/course-card.component";
import { UserCardComponent } from "src/app/components/user-card/user-card.component";

describe("UserManagementComponent", () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserManagementComponent, UserCardComponent],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientTestingModule,
      ],
    });
    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
