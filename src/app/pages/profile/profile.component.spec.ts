import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ProfileComponent } from "./profile.component";
import { MaterialModule } from "src/app/shared/material/material.module";

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [MaterialModule],
    });
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit("should create", () => {
    expect(component).toBeTruthy();
  });
});
